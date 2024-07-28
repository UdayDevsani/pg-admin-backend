const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/', notificationController.getAllNotifications);
router.post('/', notificationController.createNotification);
router.put('/', notificationController.updateNotification);
router.delete('/:notification_id', notificationController.deleteNotification);

module.exports = router;
