const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/user-routes');
const roomRoutes = require('./routes/room-routes');
const bookingRoutes = require('./routes/booking-routes');
const paymentRoutes = require('./routes/payment-routes');
const notificationRoutes = require('./routes/notification-routes');
const reportRoutes = require('./routes/reports-routes');
const authRoutes = require('./routes/auth-routes');
const { verifyToken } = require('./middleware/auth-middleware');

const app = express();

// Middleware
app.use(bodyParser.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/users', verifyToken, userRoutes);
app.use('/api/rooms', verifyToken, roomRoutes);
app.use('/api/bookings', verifyToken, bookingRoutes);
app.use('/api/payments', verifyToken, paymentRoutes);
app.use('/api/notifications', verifyToken, notificationRoutes);
app.use('/api/reports', verifyToken, reportRoutes);

const PORT = process.env.PORT || 5000;

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
