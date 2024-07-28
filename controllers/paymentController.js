const db = require('../config/db');

exports.getAllPayments = (req, res) => {
    const query = `SELECT * FROM payments`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.createPayment = (req, res) => {
    const { booking_id, amount, payment_date, payment_method, status } = req.body;

    const query = `INSERT INTO payments (booking_id, amount, payment_date, payment_method, status) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [booking_id, amount, payment_date, payment_method, status], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Payment created successfully!' });
    });
};

exports.updatePayment = (req, res) => {
    const { payment_id, booking_id, amount, payment_date, payment_method, status } = req.body;

    const query = `UPDATE payments SET booking_id = ?, amount = ?, payment_date = ?, payment_method = ?, status = ? WHERE payment_id = ?`;
    db.query(query, [booking_id, amount, payment_date, payment_method, status, payment_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Payment updated successfully!' });
    });
};

exports.deletePayment = (req, res) => {
    const { payment_id } = req.params;

    const query = `DELETE FROM payments WHERE payment_id = ?`;
    db.query(query, [payment_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Payment deleted successfully!' });
    });
};
