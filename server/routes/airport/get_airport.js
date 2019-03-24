'use-strict';

const express = require('express');
const app = express();
const airports_v1 = require('../../assets/airports_v1.json');
const airports_v2 = require('../../assets/airports_v2.json');
const httpStatusCodes = require('http-status-codes');

//obtiene aeropuestos por un termino de búsqueda
app.get('/airport/:id', (req, res) => {

  const TERM = req.params.id.toLowerCase();

  const FILTERED = airports_v2.data.airports.filter(airport => 
    {
      let name = airport.name ? airport.name.toLowerCase() : null;
      let seoName = airport.seoName ? airport.seoName.toLowerCase() : null;
      let iataCode = airport.iataCode ? airport.iataCode.toLowerCase() : null;

      return name !== null && name.indexOf(TERM) > -1 || seoName !== null && seoName.indexOf(TERM) > -1 || iataCode !== null && iataCode.indexOf(TERM) > -1;
  });

return res.json({
    STATUS: httpStatusCodes.OK,
    FILTERED
  });
});

module.exports = app;