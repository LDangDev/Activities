// utilties.js
const dogs = [];

let nextDogId = 1;

function addOne(name) {
  const newDog = {
    dogId: nextDogId++,
    name,
  };
  dogs.push(newDog);
  return newDog;
}

function findById(dogId) {
  return dogs.find((dog) => dog.dogId == dogId);
}

function updateOne(dogId, updatedName) {
  const dog = findById(dogId);
  if (dog) {
    dog.name = updatedName;
    return dog;
  } else {
    return null; // Or throw an error if update fails
  }
}

function deleteOne(dogId) {
  const dogIdx = dogs.findIndex((dog) => dog.dogId == dogId);
  if (dogIdx !== -1) {
    dogs.splice(dogIdx, 1);
    return true; // Indicate successful deletion
  } else {
    return false; // Indicate dog not found
  }
}

module.exports = {
  dogs,
  addOne,
  findById,
  updateOne,
  deleteOne,
};
