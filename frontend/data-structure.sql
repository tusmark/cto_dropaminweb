-- Dropamin Workshop & Reservation Schema

-- Workshops Table
CREATE TABLE IF NOT EXISTS dropamin_workshops (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT,
    location TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    capacity INTEGER NOT NULL,
    available_spots INTEGER NOT NULL,
    is_sold_out BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Reservations Table
CREATE TABLE IF NOT EXISTS dropamin_reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workshop_id INTEGER NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    tickets_count INTEGER NOT NULL DEFAULT 1,
    total_price DECIMAL(10, 2) NOT NULL,
    status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workshop_id) REFERENCES dropamin_workshops(id)
);

-- Initial Data for Dropamin Tour 2026
INSERT INTO dropamin_workshops (city, date, time, location, price, capacity, available_spots) VALUES
('Žilina', '2026-06-01', '18:00', 'Stanica Záriečie', 25.00, 50, 50),
('Čadca', '2026-06-02', '18:00', 'Kultúrny dom', 25.00, 40, 40),
('Bytča', '2026-06-03', '18:00', 'Synagóga', 25.00, 30, 30),
('Martin', '2026-06-04', '18:00', 'Barmuseum', 25.00, 50, 50),
('Bratislava', '2026-06-06', '19:00', 'Nová Cvernovka', 30.00, 100, 100),
('Banská Bystrica', '2026-06-08', '18:00', 'Záhrada CNK', 25.00, 60, 60),
('Košice', '2026-06-10', '18:00', 'Tabačka Kulturfabrik', 25.00, 80, 80),
('Brno', '2026-06-12', '18:00', 'Fléda', 30.00, 100, 100),
('Praha', '2026-06-14', '19:00', 'MeetFactory', 35.00, 150, 150);
