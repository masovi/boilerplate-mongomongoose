require('dotenv').config();
let mongoose = require('mongoose');
const { personSchema } = require('./personSchema.js');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({ name: 'Marc', age: 43, favoriteFoods: ['pizza', 'ice-cream'] });
  person.save(function (err, data) {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: [food] }, function (err, data) {
    if (err) {
      return done(err);
    }
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) {
      return done(err);
    }
    done(err, data);
  });
};

const findEditThenSave = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) {
      done(err);
    }
    const foodToAdd = "hamburger";
    data.favoriteFoods.push(foodToAdd);
    Person.save(data, function (err, data) {
      if (err) {
        done(err);
      }
      return done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
