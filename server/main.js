const express = require('express');//importing express api to use it
const cors = require('cors'); //open the server access for client requests. for doamins to use the server
const mongoose = require('mongoose');

const CarsRouter = require('./routers/carsRouter');// importing cars router to use it in app.use()
const PersonsRouter = require('./routers/personsRouter');
const connectDB  = require('./configs/db')

/////////////express/////////////////

const app = express();//open new express instance.
const port = 8888;

//connect to DB -mongood
connectDB();

//Middlewares - functions
// Cross-Origin Resource Sharing (CORS) is a mechanism that gives permission for one origin (domain) to access another origin
app.use(cors());
// Parse incoming request bodies in a middleware before the handlers, available under the 'req.body' property
app.use('/', express.json());

//routers. app.use(path,router)
app.use('/cars', CarsRouter);//direct to relevant router. request / - the entry point. cars - the rest of the req - for this type of req direct to cars router 
app.use('/persons', PersonsRouter);
/////////////////////////////////

app.listen(port, () => {//create a server (local server)that listening to requests from this site
    console.log(`app is listening at http://localhost:${port}`) // The server's Entry Point
})


////////////////mongodb/////////////////////////////


// async function connectDB(){
//     try {
//        // await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
//         //const personSchema = new mongoose.Schema({name: String});
//         let Person = require('./model/personModel');//model obj 
//         console.log("mongoose state: " + mongoose.connection.readyState);
//         //const Mary = new Person({ name: 'Mary', age: '32' });
//         //await Mary.save();
//         const persons = await Person.find({}, ['name', 'age']);
//         console.log("all persons " + persons);
    
//       } catch (error) {
//         console.log(error);
//       }

// }

// connectDB();

// const dana = new Person({ name: "Dana" })

// async function addPerson() {
//     await dana.save();
   
// }

//addPerson();

//async function showAllPersons() {
    //const allPersons = await Person.find();
    //console.log("all persons: " + allPersons);
//}

//showAllPersons();










