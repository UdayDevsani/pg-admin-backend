const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBooking);
router.put('/', bookingController.updateBooking);
router.delete('/:booking_id', bookingController.deleteBooking);

module.exports = router;
