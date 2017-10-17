const express = require('express');
const app = express();
const http = require('http');

const api = require('./routes/api');
app.use('/api', api);

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app).listen(port);
server.listen(port, () => console.log(`API running on localhost:${port}`));
