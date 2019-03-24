'use-strict';

const express = require('express');
const app = express();
const airports_v1 = require('../../assets/airports_v1.json');
const airports_v2 = require('../../assets/airports_v2.json');
const httpStatusCodes = require('http-status-codes');

//obtiene todos los aeropuertos según la versión del JSON
app.get('/getairports/:id', (req, res) => {

  res.json({
    status: httpStatusCodes.OK,
    airports: req.params.id === 'v1' 
              ? airports_v1 : 
              req.params.id === 'v2' 
              ? airports_v2 : 
              []
  });

});

module.exports = app;