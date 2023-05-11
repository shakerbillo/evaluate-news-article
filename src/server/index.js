// Setup empty JS object to act as endpoint for all routes
projectData = {};

const dotenv = require('dotenv');
dotenv.config();

// APIkey with environment variables
const APIkey = process.env.API_KEY;
// Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mockAPIResponse = require('./mockAPI.js');

console.log('API Key:', process.env.API_KEY);
const app = express();

/* Dependencies */

/* Middleware*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse json format to string format

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Initiate GET route
const fileSend = (req, res) => {
	res.sendFile('dist/index.html');
};
app.get('/', fileSend);

// designates what port the app will listen to for incoming requests

// Port setup
const port = 8081;
// Spin up the server

const listening = () => {
	// console.log(server);
	console.log('Server listening on port ' + port);
};
const server = app.listen(port, listening);

// Initialize all route with a callback function

// Callback function to complete GET '/all'
const getFunc = (req, res) => {
	console.log(projectData);
	res.send(projectData);
};
app.get('/all', getFunc);

// Post Route
const postRoute = (req, res) => {
	console.log(req.body);
	projectData = {
		agreement: req.body.agreement,
		confidence: req.body.confidence,
		irony: req.body.irony,
		model: req.body.model,
		score_tag: req.body.score_tag,
		subjectivity: req.body.subjectivity,
	};
	res.send(projectData);
	console.log(`Received response: ${res.status}`);
};

app.post('/api', postRoute);
