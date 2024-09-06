/* // The data model for user is as follows
{
    "name": "Matti Seppänen",
    "password": "M@45mtg$",
    "username": "mattis",
    "address": "Mannerheimintie 14, 00100 Helsinki",	
    "age": 23
}
 */
let userArray = [];

let nextId = 1;

function getAll() {
  return userArray;
}

function addOne(userData) {
  // Check if any parameter is empty or undefined
  const { name, password, username, address, age } = userData;
  if (!name || !password || !username || !address || !age) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...userData,
  };

  userArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = userArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData); // Update properties using Object.assign
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = userArray.length;
    userArray = userArray.filter((item) => item.id !== Number(id));
    return userArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  let result = addOne({
    name: "John Doe",
    password: "password123",
    username: "johndoe",
    address: "123 Main St",
    age: 30,
  });
  console.assert(result.length === 1, "Test 1 Failed: Should add one user");
  console.log(result);
  // Test 2: Add another valid user
  result = addOne({
    name: "Jane Smith",
    password: "password456",
    username: "janesmith",
    address: "456 Elm St",
    age: 25,
  });
  console.assert(result.length === 2, "Test 2 Failed: Should add another user");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOne called:", updateOneById(1, { age: 31, address: "789 Oak St" }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;
