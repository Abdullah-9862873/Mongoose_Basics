
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

const fruit2 = new Fruit({
    "rating" : 10,
    "review" : "Not bad",
});
fruit2.save();

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

const pineapple = new Fruit({
    "name" : "pineapple",
    "rating" : 8,
    "review" : "Great fruit",
});

pineapple.save();

Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully added three fruits");
    }
})

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favourite_fruit : fruitSchema,
});

const person = mongoose.model("person", personSchema);

person.updateMany({'name' : 'John'}, {favourite_fruit : pineapple}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully updated johns");
    }
})

// const person1 = new person({
//     "name" : "Amy",
//     "age" : 17,
//     favourite_fruit : pineapple,
// });

// person1.save();

//_______________________________________Update________________________________________________________

// Fruit.updateOne({_id: '634fb679b9281e6950c8829f'}, {name : "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully updated");
//     }
// })

Fruit.deleteOne({name: 'peach'}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully deleted one entry");
    }
})

Fruit.deleteMany({name:'kiwi'}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully deleted the kiwi");
    }
})

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
