const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = (req, res) => {
    const { username, password, email, full_name, phone_number, role } = req.body;

    // Check if all required fields are provided
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Please provide username, password, and email' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO users (username, password, email, full_name, phone_number, role) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [username, hashedPassword, email, full_name, phone_number, role];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Database error' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: results.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'User registered successfully',
            token,
        });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Check if all required fields are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error querying user:', err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];

        // Compare passwords
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
        });
    });
};