'use strict';
const fetch = require('../index.js');
const config = require('./config.js');

config.endpoints.forEach((endpoint)=> {
  fetch({
    'api': config.api,
    'endpoint': endpoint, 
    'format': 'json', 
    'output': config.output
  });
});
