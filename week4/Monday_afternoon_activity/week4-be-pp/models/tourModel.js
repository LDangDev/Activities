// data model
/*
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
*/

let tourArray = [];
let nextId = 1;

const getAll = () => {
  return tourArray;
};

const addOne = (name, info, image, price) => {
  if (!name | !info | !image | !price) {
    return false;
  }
  const newTour = {
    id: nextId++,
    name: name,
    info: info,
    image: image,
    price: price,
  };
  tourArray.push(newTour);
  return newTour;
};

const findById = (id) => {
  const tour = tourArray.find((tour) => tour.id === Number(id));
  if (tour) {
    return tour;
  } else return false;
};

const updateOneById = (id, updatedData) => {
  const tour = findById(id);
  if (tour) {
    if (updatedData.name) {
      tour.name = updatedData.name;
    }
    if (updatedData.info) {
      tour.info = updatedData.info;
    }
    if (updatedData.image) {
      tour.image = updatedData.image;
    }
    if (updatedData.price) {
      tour.price = updatedData.price;
    }
    return tour;
  }
  return false;
};

const deleteOneById = (id) => {
  const tour = findById(id);
  if (tour) {
    const initialLenght = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id !== Number(id));
    return tourArray.length < initialLenght;
  } else return false;
};
if (require.main === module) {
  let result = addOne("Paris in 7 Days Tour", "Paris is synonymous.", "https://www.course-api.com/images/tours/tour-1.jpeg", 500);
  console.log(result);
  result = addOne("Finland in 7 Days Tour", "Finland is synonymous.", "https://www.course-api.com/images/tours/tour-2.jpeg", 800);
  console.log(result);
  console.log(`getAll called: ${getAll()}`);
  console.log(`findById called: ${findById(2)}`);
  console.log(
    `updateById called: ${updateOneById(2, {
      name: "Italy in 7 Days Tour",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      price: 800
    })}`
  );
  console.log(`findById called after item updated: ${findById(2)}`);
  console.log(`deleteById called: ${deleteOneById(2)}`);
  console.log(`findById called after item deleted: ${findById(2)}`);
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
