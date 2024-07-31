const db = require('../config/db');

// Fetch occupancy reports
exports.getOccupancyReport = (req, res) => {
    const query = `
       SELECT r.room_number, pu.full_name AS occupant_name, b.start_date AS occupancy_date
       FROM bookings b
       JOIN rooms r ON b.room_id = r.room_id
       JOIN pg_users pu ON b.booking_id = pu.booking_id
       WHERE b.status = 'booked';`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching occupancy report:', err);
            return res.status(500).send(err);
        }
        console.log('Occupancy report results:', results); // Add this line
        res.status(200).send(results);
    });
};

// Fetch payment reports
exports.getPaymentReport = (req, res) => {
    const query = `
        SELECT p.payment_id, b.booking_id, p.amount, p.payment_date, p.payment_method, p.status
        FROM payments p
        JOIN bookings b ON p.booking_id = b.booking_id;`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching payment report:', err);
            return res.status(500).send(err);
        }
        console.log('Payment report results:', results); // Add this line
        res.status(200).send(results);
    });
};
