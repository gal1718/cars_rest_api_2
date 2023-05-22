let Person = require('../model/personModel');

//CRUD:
//GetAll. returning promise
function getAllPersons() {
    return Person.find({}, ['name', 'age']);

};
//GetByID
const getPersonById = (id) => {
    const person = Person.find({ _id: id }, ['name', 'age']);
}
//Post - Create
const addPerson = async (obj) => {
    //console.log("obj : " + obj);
    const newPerson = new Person(obj);
    await newPerson.save();
    return "person created";

}

//Put - Update a person
const updatePerson = async (id, obj) => {
    const { modifiedCount } = await Person.updateOne({ _id: id }, obj);
    console.log(modifiedCount);
}

//Delete a person
const deletePerson = (id) => {
    return Person.findOneAndDelete({ _id: id })
}



module.exports = { getAllPersons, getPersonById, addPerson, updatePerson, deletePerson }



