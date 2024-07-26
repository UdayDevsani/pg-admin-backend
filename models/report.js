const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Report = sequelize.define('Report', {
  report_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  report_type: {
    type: DataTypes.ENUM('occupancy', 'payment', 'other'),
    allowNull: false,
  },
  generated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  details: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false,
});

module.exports = Report;
