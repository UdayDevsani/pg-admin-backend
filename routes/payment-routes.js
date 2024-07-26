const express = require('express');
const { getAllPayments, createPayment, getPaymentById, updatePayment, deletePayment } = require('../controllers/payment-controller');

const router = express.Router();

router.get('/', getAllPayments);
router.post('/', createPayment);
router.get('/:id', getPaymentById);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

module.exports = router;
