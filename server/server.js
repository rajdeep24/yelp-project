require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
//API Routes: Get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
	console.log('route handler ran');
	res.status(200).json({
		status: 'success',
		data: {
			restaurant: ["McDonald's", 'Chick-fil-a'],
		},
	});
});

//API Routes: Get a specific restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params);

	res.status(200).json({
		status: 'success',
		data: {
			restaurant: "McDonald's",
		},
	});
});

//API Routes: Create a Restaurant
app.post('/api/v1/restaurants', (req, res) => {
	console.log(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			restaurant: "McDonald's",
		},
	});
});

//API Routes: Update Restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params.id);
	console.log(req.body);

	res.status(200).json({
		status: 'success',
		data: {
			restaurant: "McDonald's",
		},
	});
});

//API Routes: Delete Restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params.id);

	console.log(req.body);

	res.status(204).json({
		status: 'success',
	});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is up and listening on http://localhost:${PORT}`);
});
