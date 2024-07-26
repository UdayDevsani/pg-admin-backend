const express = require('express');
const { getAllNotifications, createNotification, getNotificationById, updateNotification, deleteNotification } = require('../controllers/notification-controller');

const router = express.Router();

router.get('/', getAllNotifications);
router.post('/', createNotification);
router.get('/:id', getNotificationById);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

module.exports = router;
