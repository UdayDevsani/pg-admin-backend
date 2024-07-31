const express = require('express');
const pgUserController = require('../controllers/pgUserController');

const router = express.Router();

router.get('/', pgUserController.getAllPGUsers);
router.post('/', pgUserController.createPGUser);
router.get('/:pg_user_id', pgUserController.getPGUserById);
router.put('/:pg_user_id', pgUserController.updatePGUser);
router.delete('/:pg_user_id', pgUserController.deletePGUser);

module.exports = router;