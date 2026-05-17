const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const contactController = require('../controllers/contactController');
const workshopController = require('../controllers/workshopController');
const reservationController = require('../controllers/reservationController');
const academyController = require('../controllers/academyController');

// Project routes
router.get('/projects', projectController.getAllProjects);
router.get('/projects/:id', projectController.getProjectById);

// Contact routes
router.post('/contact', contactController.submitContactForm);

// Dropamin Workshop routes
router.get('/workshops', workshopController.getAllWorkshops);
router.post('/reserve', reservationController.submitReservation);

// Dropamin Academy routes
router.get('/levels', academyController.getLevels);
router.post('/register', academyController.register);
router.get('/academy-stats', academyController.getStats);
router.get('/testimonials', academyController.getTestimonials);
router.get('/pricing', academyController.getPricing);

module.exports = router;
