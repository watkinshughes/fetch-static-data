'use strict';
const fs = require('fs');
const fetch = require('../index.js');
const config = require('./config.js');
const length = config.endpoints.length;
let locals = {};
let count = 0;

function saveData() {
  count++
  if (count === length) {
    const file = './data/locals.json';
    const data = JSON.stringify(locals, null, ' ');
    fs.writeFile(file, data, (error) => {
      if (error) throw error;
      console.log('compiled locals saved!');
    });
  }
}

config.endpoints.forEach(function(endpoint) {
  fetch({
    'api': config.api,
    'endpoint': endpoint, 
    'format': 'json'
  }, function(data){
    locals[endpoint] = JSON.parse(data);
    saveData(data);
  });
});