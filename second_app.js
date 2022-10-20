
// _______________________________________Initialization__________________________________________________
const mongoose = require('mongoose');


// Create or use a database named fruitsDB and access it from local lost 27017
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true,});


// _______________________________________Schema Creation__________________________________________________
const fruitSchema = new mongoose.Schema({
    name : {
        required: [true, "Please check your data entry name"],
        type: String,
    },
    rating : {
        type: Number,
        min: 1,
        max: 10,
    },
    review : String,
});

// _______________________________________Model Creation__________________________________________________

// Creation of a model to named Fruit which will follow the fruit Schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// _______________________________________Insertion_____________________________________________________

const fruit = new Fruit({
    "rating" : 4,
    "review" : "Great Fruit",
});
fruit.save();


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
