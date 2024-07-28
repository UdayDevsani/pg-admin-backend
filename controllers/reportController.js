const db = require('../config/db');

exports.getOccupancyReport = (req, res) => {
    const query = `SELECT * FROM occupancy_report`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.getPaymentReport = (req, res) => {
    const query = `SELECT * FROM payment_report`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};
