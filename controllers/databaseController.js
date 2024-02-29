const Person = require('../models/person');

const createAndSavePerson = (personData) => {
  const person = new Person(personData);
  return person.save();
};

const createManyPeople = (arrayOfPeople) => {
  return Person.create(arrayOfPeople);
};

const findPeopleByName = (name) => {
  return Person.find({ name });
};

const findOneByFood = (food) => {
  return Person.findOne({ favoriteFoods: food });
};

const findPersonById = (personId) => {
  return Person.findById(personId);
};

const findEditThenSave = (personId, foodToAdd) => {
  return Person.findById(personId)
    .then((person) => {
      person.favoriteFoods.push(foodToAdd);
      return person.save();
    });
};

const findAndUpdate = (personName, newAge) => {
  return Person.findOneAndUpdate({ name: personName }, { age: newAge }, { new: true });
};

const removeById = (personId) => {
  return Person.findByIdAndRemove(personId);
};

const removeManyPeople = (name) => {
  return Person.deleteMany({ name });
};

const queryChain = (food) => {
  return Person.find({ favoriteFoods: food })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec();
};

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain
};
