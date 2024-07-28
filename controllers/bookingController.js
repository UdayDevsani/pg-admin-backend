const db = require('../config/db');

exports.getAllBookings = (req, res) => {
    const query = `SELECT * FROM bookings`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.createBooking = (req, res) => {
    const { user_id, room_id, start_date, end_date, status } = req.body;

    const query = `INSERT INTO bookings (user_id, room_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [user_id, room_id, start_date, end_date, status], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Booking created successfully!' });
    });
};

exports.updateBooking = (req, res) => {
    const { booking_id, user_id, room_id, start_date, end_date, status } = req.body;

    const query = `UPDATE bookings SET user_id = ?, room_id = ?, start_date = ?, end_date = ?, status = ? WHERE booking_id = ?`;
    db.query(query, [user_id, room_id, start_date, end_date, status, booking_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Booking updated successfully!' });
    });
};

exports.deleteBooking = (req, res) => {
    const { booking_id } = req.params;

    const query = `DELETE FROM bookings WHERE booking_id = ?`;
    db.query(query, [booking_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Booking deleted successfully!' });
    });
};
