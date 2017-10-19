const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const https = require('https');
const forceSSL = require('express-force-ssl');
const helmet = require('helmet');
const fs = require ('fs');


const api = require('./routes/api');

// use helmet

app.use(helmet());

// force SSL
app.use(forceSSL);




// if create routes api will prefix all routes
app.use('/api', api);

// setting pug view engine
app.set('view engine', 'pug');

// homepage

app.get('/', function (req, res) {
    res.render('index', { title: 'Jonathan', message: 'Welcome to Jonathan\'s homepage' })
})

const port = process.env.PORT || '3000';
app.set('port', port);
const server = https.createServer(app).listen(port);
server.listen(port, () => console.log(`API running on localhost:${port}`));
