const express = require('express');
const carsBLL = require('../BLL/carsBLL')
const router = express.Router(); //routerclass. express.router create new router instance. this class contain all rest type requests

//http://localhost:${port}/cars - entry point 
router.route('/').get(async (req,res) => {
    const cars = await carsBLL.getAllCars();
    console.log("getAllCars route: "  + cars);
    res.json(cars);
});


//GetCarById
router.route('/:id').get(async (req,res) => {
    const {id} = req.params;
    console.log(id)
    const car = await carsBLL.getCarById(id);
    res.json(car ?? 'Wrong ID');
})

//Add a car
router.route('/').post((req,res) =>{
    const obj = req.body;
    const result = carsBLL.addCar(obj);
    res.json(result);
     
})

//update a car
router.route('/:id').put((req,res) => {
    const {id} = req.params;
    const obj = req.body;
    const result = carsBLL.updateCar(id,obj);
    res.json(result);
    
})

//Delete a car
router.route('/:id').delete(async (req,res) => {
    const {id} = req.params;
    const result = await carsBLL.deleteCar(id);
    res.json(result);
})

module.exports = router; 

