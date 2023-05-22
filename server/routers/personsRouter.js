const express = require('express');
const personsBLL = require('../BLL/personsBLL')
const router = express.Router(); //routerclass. express.router create new router instance. this class contain all rest type requests

//http://localhost:${port}/persons - entry point 
router.route('/').get(async (req,res) => {
    const persons = await personsBLL.getAllPersons();
    console.log("getAllPersons route: "  + persons);
    res.json(persons);
});

//GetPersonById
router.route('/:id').get(async (req,res) => {
    const {id} = req.params;
    console.log(id)
    const person = await personsBLL.getPersonById(id);
    res.json(person ?? 'Wrong ID');
})

//Add a person
router.route('/').post( async (req,res) =>{
    const obj = req.body;
    const result = await personsBLL.addPerson(obj);
    res.json(result);
     
})

//update a person
router.route('/:id').put((req,res) => {
    const {id} = req.params;
    const obj = req.body;
    const result = personsBLL.updatePerson(id,obj);
    res.json(result);
    
})

//Delete a person
router.route('/:id').delete(async (req,res) => {
    const {id} = req.params;
    const result = await personsBLL.deletePerson(id);
    res.json(result);
})

module.exports = router; 

