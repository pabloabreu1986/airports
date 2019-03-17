'use-strict';

const express = require('express');
const app = express();

//aeropuertos
app.use(require('./airport/airports'));

module.exports = app;
