require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

//middle wear

app.use((req, res, next) => {
	res.status(404).json({
		status: 'fail',
	});
});

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
app.get('/api/v1/restaurants/:restaurantId', (req, res) => {
	console.log(req.params);
});

//API Routes: Create a Restaurant
app.post('/api/v1/restaurants', (req, res) => {
	console.log(req);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is up and listening on http://localhost:${PORT}`);
});
