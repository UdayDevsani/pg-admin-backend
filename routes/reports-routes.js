const express = require('express');
const { getAllReports, createReport, getReportById, updateReport, deleteReport } = require('../controllers/report-controller');

const router = express.Router();

router.get('/', getAllReports);
router.post('/', createReport);
router.get('/:id', getReportById);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;
