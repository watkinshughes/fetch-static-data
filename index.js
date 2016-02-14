'use strict';
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = (settings, callback)=> {
  const endpoint = settings.endpoint; 
  fetch(settings.api + endpoint)
  .then((res)=> {
    return res.text();
  })
  .then((data)=> {
    if (settings.output) {
      let file = settings.output + '/' + endpoint + '.' + settings.format;
      fs.writeFile(file, data, (error) => {
        if (error) throw error;
        console.log(endpoint + ' saved!');
      });
    } 
    callback(data);
  });
};