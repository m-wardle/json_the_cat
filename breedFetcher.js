const request = require('request');
let args = process.argv;


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

let p = catSearch("https://api.thecatffapi.com/v1/breeds/search?q=" + args[2]);

p
  .then((body) => {
    let data = JSON.parse(body);
    console.log(data[0].description);
  })
  .catch((error) => {
    if (error['name'] === 'TypeError') {
      console.log("Breed name not found! Please try again.");
    } else {
      console.log("Request failed. See error: " + error);
    }
  });
