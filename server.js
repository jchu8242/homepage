// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const https = require('https');
const forceSSL = require('express-force-ssl');

// Check environment - if production include additional
const app = express();

// use helmet
app.use(helmet());

// Get our API routes
const api = require('./api');

// app.use binds application middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log requests to console .
app.use(morgan('dev'));

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes - /api will prefix the routes found in api.js
app.use('/api', api);


const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`running on port ${port}`));
