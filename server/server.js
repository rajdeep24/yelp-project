require('dotenv').config();
const express = require('express');

const app = express();

//ROUTES
app.get('/getRestaurants', (req, res) => {
	console.log('get all restaurants');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is up and listening on http://${PORT}`);
});
