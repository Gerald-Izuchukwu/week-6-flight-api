const fs = require('fs');
const Flight = require('../models/Flight');
const flight = Flight.exampleModel;

exports.addFLight = (req, res) => {
	const newId = flight[flight.length - 1].id + 1;
	const newFlight = Object.assign({ id: newId }, req.body);
	// flight.push(newFlight);

	res.status(201).json({
		success: true,
		message: 'Flight Created',
		data: newFlight,
	});
};

exports.getAllFlights = (req, res) => {
	res.status(200).json({
		msg: 'success ',
		data: { flight },
	});
};

exports.getSingleFlight = (req, res) => {
	const singleFlight = flight.find(
		(elem) => elem.id.toString() === req.params.id
	);

	if (!singleFlight) {
		return res
			.status(404)
			.json({ status: 'failed', message: 'Resource not found' });
	}

	res.status(200).json({
		success: 'true',
		data: singleFlight,
	});
};

exports.updateFlight = (req, res) => {};
