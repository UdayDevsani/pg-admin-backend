const db = require('../config/db');

exports.getDashboardData = (req, res) => {
    const queries = {
        totalUsers: 'SELECT COUNT(*) AS totalUsers FROM users',
        totalRooms: 'SELECT COUNT(*) AS totalRooms FROM rooms',
        totalBookings: 'SELECT COUNT(*) AS totalBookings FROM bookings',
        totalPayments: 'SELECT SUM(amount) AS totalPayments FROM payments WHERE status = "paid"',
        latestBookings: `SELECT b.booking_id, u.username, r.room_number, b.start_date, b.end_date, b.status
                         FROM bookings b
                         JOIN users u ON b.user_id = u.user_id
                         JOIN rooms r ON b.room_id = r.room_id
                         ORDER BY b.created_at DESC LIMIT 5`,
        latestPayments: `SELECT p.payment_id, u.username, p.amount, p.payment_date, p.payment_method, p.status
                         FROM payments p
                         JOIN bookings b ON p.booking_id = b.booking_id
                         JOIN users u ON b.user_id = u.user_id
                         ORDER BY p.payment_date DESC LIMIT 5`
    };

    Promise.all([
        new Promise((resolve, reject) => {
            db.query(queries.totalUsers, (err, results) => {
                if (err) reject(err);
                else resolve(results[0].totalUsers);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(queries.totalRooms, (err, results) => {
                if (err) reject(err);
                else resolve(results[0].totalRooms);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(queries.totalBookings, (err, results) => {
                if (err) reject(err);
                else resolve(results[0].totalBookings);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(queries.totalPayments, (err, results) => {
                if (err) reject(err);
                else resolve(results[0].totalPayments);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(queries.latestBookings, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(queries.latestPayments, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        })
    ])
    .then(([totalUsers, totalRooms, totalBookings, totalPayments, latestBookings, latestPayments]) => {
        res.json({
            totalUsers,
            totalRooms,
            totalBookings,
            totalPayments,
            latestBookings,
            latestPayments
        });
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
};