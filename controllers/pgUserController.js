const db = require('../config/db');

exports.getAllPGUsers = (req, res) => {
    const query = `SELECT * FROM pg_users`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.createPGUser = (req, res) => {
    const { full_name, email, phone_number, address, room_id, booking_id, status } = req.body;

    const query = `INSERT INTO pg_users (full_name, email, phone_number, address, room_id, booking_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [full_name, email, phone_number, address, room_id, booking_id, status], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'PG User created successfully!' });
    });
};

exports.getPGUserById = (req, res) => {
    const { pg_user_id } = req.params;

    const query = `SELECT * FROM pg_users WHERE pg_user_id = ?`;
    db.query(query, [pg_user_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results[0]);
    });
};

exports.updatePGUser = (req, res) => {
    const { pg_user_id, full_name, email, phone_number, address, room_id, booking_id, status } = req.body;

    const query = `UPDATE pg_users SET full_name = ?, email = ?, phone_number = ?, address = ?, room_id = ?, booking_id = ?, status = ? WHERE pg_user_id = ?`;
    db.query(query, [full_name, email, phone_number, address, room_id, booking_id, status, pg_user_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'PG User updated successfully!' });
    });
};

exports.deletePGUser = (req, res) => {
    const { pg_user_id } = req.params;

    const query = `DELETE FROM pg_users WHERE pg_user_id = ?`;
    db.query(query, [pg_user_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'PG User deleted successfully!' });
    });
};
