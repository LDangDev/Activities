/* // The data model for car is as follows
{
    "model": "Corolla",
    "color": "Red",
    "age": 3
}
 */
let carArray = [];

let nextId = 1;

function getAll() {
  return carArray;
}

function addOne(carData) {
  // Check if any parameter is empty or undefined
  const { model, color, age } = carData;
  if (!model || !color || !age) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...carData,
  };

  carArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = carArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const car = findById(id);
  if (car) {
    Object.assign(car, updatedData); // Update properties using Object.assign
    return car;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = carArray.length;
    carArray = carArray.filter((item) => item.id !== Number(id));
    return carArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  let result = addOne({
    model: "Corolla",
    color: "Red",
    age: 3,
  });
  console.assert(result.length === 1, "Test 1 Failed: Should add one car");
  console.log(result);
  // Test 2: Add another valid car
  result = addOne({
    model: "Civic",
    color: "Blue",
    age: 2,
  });
  console.assert(result.length === 2, "Test 2 Failed: Should add another car");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOne called:", updateOneById(1, { age: 4, color: "Green" }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const Car = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Car;
