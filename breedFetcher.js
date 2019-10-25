const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (body === "[]") {
      callback(Error("Breed not found. Please try again."), null);
    } else {
      let data = JSON.parse(body)[0].description.trim();
      callback(null, data);
    }
  });
};
  

module.exports = { fetchBreedDescription };