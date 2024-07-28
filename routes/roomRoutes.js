const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.getAllRooms);
router.post('/', roomController.createRoom);
router.put('/', roomController.updateRoom);
router.delete('/:room_id', roomController.deleteRoom);

module.exports = router;
