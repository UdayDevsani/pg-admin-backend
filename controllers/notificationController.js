const db = require('../config/db');

exports.getAllNotifications = (req, res) => {
    const query = `SELECT * FROM notifications`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.createNotification = (req, res) => {
    const { user_id, message, status } = req.body;

    const query = `INSERT INTO notifications (user_id, message, status) VALUES (?, ?, ?)`;
    db.query(query, [user_id, message, status], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Notification created successfully!' });
    });
};

exports.updateNotification = (req, res) => {
    const { notification_id, user_id, message, status } = req.body;

    const query = `UPDATE notifications SET user_id = ?, message = ?, status = ? WHERE notification_id = ?`;
    db.query(query, [user_id, message, status, notification_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Notification updated successfully!' });
    });
};

exports.deleteNotification = (req, res) => {
    const { notification_id } = req.params;

    const query = `DELETE FROM notifications WHERE notification_id = ?`;
    db.query(query, [notification_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Notification deleted successfully!' });
    });
};
