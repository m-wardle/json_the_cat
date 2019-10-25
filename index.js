const { fetchBreedDescription } = require('./breedFetcher');
let args = process.argv;
let breed = args[2];


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

module.exports = { fetchBreedDescription };