const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const mongoDbConfig = require('./credentials/mongoDbConfig');

const server = express();

mongoose.connect(mongoDbConfig, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000);