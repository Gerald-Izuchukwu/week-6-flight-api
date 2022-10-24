const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.route('/').get(controller.getAllFlights).post(controller.addFLight);
router.route('/:id').get(controller.getSingleFlight);

module.exports = router;
