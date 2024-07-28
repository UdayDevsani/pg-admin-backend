const db = require('../config/db');

exports.getAllRooms = (req, res) => {
    const query = `SELECT * FROM rooms`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.createRoom = (req, res) => {
    const { room_number, type, rent, status, description } = req.body;

    const query = `INSERT INTO rooms (room_number, type, rent, status, description) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [room_number, type, rent, status, description], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Room created successfully!' });
    });
};

exports.updateRoom = (req, res) => {
    const { room_id, room_number, type, rent, status, description } = req.body;

    const query = `UPDATE rooms SET room_number = ?, type = ?, rent = ?, status = ?, description = ? WHERE room_id = ?`;
    db.query(query, [room_number, type, rent, status, description, room_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Room updated successfully!' });
    });
};

exports.deleteRoom = (req, res) => {
    const { room_id } = req.params;

    const query = `DELETE FROM rooms WHERE room_id = ?`;
    db.query(query, [room_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Room deleted successfully!' });
    });
};
