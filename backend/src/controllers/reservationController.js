const db = require('../dropaminDb');

exports.submitReservation = (req, res) => {
    const { name, email, phone, workshop_id, city, tickets_count } = req.body;

    // Basic validation
    if (!name || !email || (!workshop_id && !city)) {
        return res.status(400).json({ 
            error: 'Name, email, and either workshop_id or city are required' 
        });
    }

    const count = tickets_count || 1;

    // Find workshop by ID or City
    let findSql = '';
    let findParams = [];
    if (workshop_id) {
        findSql = 'SELECT * FROM dropamin_workshops WHERE id = ?';
        findParams = [workshop_id];
    } else {
        findSql = 'SELECT * FROM dropamin_workshops WHERE city = ? AND is_sold_out = 0 ORDER BY date ASC LIMIT 1';
        findParams = [city];
    }

    db.get(findSql, findParams, (err, workshop) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (!workshop) {
            return res.status(404).json({ error: 'Workshop not found' });
        }
        if (workshop.available_spots < count) {
            return res.status(400).json({ error: 'Not enough available spots' });
        }

        const totalPrice = workshop.price * count;
        const targetWorkshopId = workshop.id;

        // Insert reservation
        const insertSql = `INSERT INTO dropamin_reservations 
            (workshop_id, customer_name, customer_email, customer_phone, tickets_count, total_price, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [targetWorkshopId, name, email, phone || null, count, totalPrice, 'pending'];

        db.run(insertSql, params, function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            // Update available spots
            const updateSql = 'UPDATE dropamin_workshops SET available_spots = available_spots - ?, is_sold_out = (available_spots - ? <= 0) WHERE id = ?';
            db.run(updateSql, [count, count, targetWorkshopId], (updateErr) => {
                if (updateErr) {
                    console.error('Error updating spots:', updateErr.message);
                }
                
                res.json({
                    message: 'Reservation submitted successfully',
                    data: {
                        reservation_id: this.lastID,
                        total_price: totalPrice
                    }
                });
            });
        });
    });
};
