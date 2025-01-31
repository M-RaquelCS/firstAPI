const instructors = require('../database/instructors');

const sequenceId = Object.values(instructors).length + 1;

// criação e adição do id em cada valor do objeto lido no sequenceId
const sequence = {
  _id: sequenceId,
  get id() { return this._id++; },
};

function addInstructor(instructor) {
  const newInstructor = instructor;
  if (!newInstructor.id) {
    newInstructor.id = sequence.id;
  }
  instructors[newInstructor.id] = newInstructor;
  return instructor;
}

function getInstructor(id) {
  return instructors[id] || {};
}

function getInstructors() {
  return Object.values(instructors);
}

function deleteInstructor(id) {
  const instructor = instructors[id] || {};
  if (instructors.hasOwnProperty(id)) {
    delete instructors[id];
  }

  return instructor;
}

function changeInstructor(id, instructor) {
  const newInstructor = instructors[id] || {};
  newInstructor.registration = instructor.registration;
  newInstructor.name = instructor.name;
  newInstructor.email = instructor.email;
  newInstructor.birth_date = instructor.birth_date;
  return newInstructor;
}

module.exports = {
  addInstructor, getInstructor, getInstructors, deleteInstructor, changeInstructor,
};
