'use strict';
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = (settings)=> {
  const endpoint = settings.endpoint; 
  const file = settings.output + '/' + endpoint + '.' + settings.format;
  fetch(settings.api + endpoint)
  .then(
    (res)=> {
      return res.text();
    })
  .then(
    (text)=> {
      fs.writeFile(file, text, (error) => {
        if (error) throw error;
        console.log(endpoint + ' saved!');
      });
    }
  );
};