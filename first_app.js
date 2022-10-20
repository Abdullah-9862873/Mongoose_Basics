
// _______________________________________Initialization__________________________________________________
const mongoose = require('mongoose');


// Create or use a database named fruitsDB and access it from local lost 27017
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true,});


// _______________________________________Schema Creation__________________________________________________
const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String,
});

// _______________________________________Model Creation__________________________________________________

// Creation of a model to named Fruit which will follow the fruit Schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// _______________________________________Insertion_____________________________________________________

const fruit = new Fruit({
    "name" : "Apple",
    "rating" : 4,
    "review" : "Great Fruit",
});
// fruit.save();

const kiwi = new Fruit({
    "name" : "kiwi",
    "rating" : 10,
    "review" : "This is a great fruit",
});

const orange = new Fruit({
    "name" : "orange",
    "rating" : 9,
    "review" : "This is a bit sour",
});

const banana = new Fruit({
    "name" : "banana",
    "rating" : 7,
    "review" : "Good",
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully added three fruits");
//     }
// })

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
});

const person = mongoose.model("person", personSchema);

const person1 = new person({
    "name" : "John",
    "age" : 37,
});

person1.save();

// _______________________________________Find__________________________________________________________

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        // console.log(fruits);
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})
