const User = require('./models/User');
const Room = require('./models/Room');
const Booking = require('./models/Booking');
const Payment = require('./models/Payment');
const Notification = require('./models/Notification');
const Report = require('./models/Report');

// Relationships
User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

Room.hasMany(Booking, { foreignKey: 'room_id' });
Booking.belongsTo(Room, { foreignKey: 'room_id' });

Booking.hasMany(Payment, { foreignKey: 'booking_id' });
Payment.belongsTo(Booking, { foreignKey: 'booking_id' });

User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

// Sync database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
