

let Car = require('../model/carsModel'); 


//CRUD:
//GetAll
 function getAllCars() {
    return Car.find({}, ['model', 'year', 'color']);
    
};

//GetByID
const getCarById = (id) => {
    const car = Car.find({_id:id}, ['model', 'year', 'color']);
}
//Post - Create
const addCar = (obj) => {
    console.log("obj : " + obj);
    const newCar = new Car(obj);
    newCar.save();
    return "car created";

}

//Put - Update a car
const updateCar = async (id, obj) => {
    const {modifiedCount} = await Car.updateOne({_id: id}, obj);
    console.log(modifiedCount);
}

//Delete a car
 const  deleteCar = (id) => {
    return  Car.findOneAndDelete({ _id: id })
}


module.exports = { getAllCars, getCarById, addCar, updateCar, deleteCar }



