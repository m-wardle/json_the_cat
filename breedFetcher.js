const request = require('request');

const breedFetcher = function(breed, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  const catSearch = function(url) {
    return new Promise((resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {

          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  };

  let p = catSearch(url);

  p
    .then((body) => {
      let data = JSON.parse(body);
      data = data[0].description;
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
      // if (error['name'] === 'TypeError') {
      //   console.log("Breed name not found! Please try again.");
      // } else {
      //   console.log("Request failed. See error: " + error);
      // }
    });
}
  

  module.exports = breedFetcher