'use-strict';

const express = require('express');
const app = express();

//aeropuertos
app.use(require('./airport/airports'));
app.use(require('./airport/get_airport'));

module.exports = app;
