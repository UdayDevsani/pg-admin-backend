const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Define routes
router.get('/occupancy', reportController.getOccupancyReport);
router.get('/payment', reportController.getPaymentReport);

module.exports = router;
