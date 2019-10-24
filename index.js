const fetchBreedDescription = require('./breedFetcher');
let args = process.argv;
let url = args[2];

fetchBreedDescription(url, (error, desc) => {
  // if (desc) {
  //   console.log(desc);
  // } else if (error) {
  //   console.log("Request failed. See error: " + error);
  // } else {
  //   console.log("Breed not found, please try again!");
  //   console.log(error)
  // }
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc.trim());
  }
});

module.exports = { fetchBreedDescription }