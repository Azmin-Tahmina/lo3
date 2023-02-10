"use strict";

/*
    File:   pet_example.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/1/2019
    Purpose: 
*/


/* constructor function - note capitalized */
function Pet(name, type, licensed) {
    this.name = name; /* setting properties */
    this.animalType = type;
    this.licensed = licensed;
}

/* add methods to prototype so that all Pet objects share one copy of the method */
Pet.prototype.toString = function() {
    return this.name + " is a(n) " + this.animalType + " whose licensed status is " + this.licensed;
};

Pet.prototype.makesSound = function() {
    return this.name + " the " + this.animalType + " makes noise.";
};


/* Note that we can have many objects in one JavaScript file */
/* Fish is going to inherit from the Pet class */
function Fish(name, licensed, species) {
    Pet.call(this, name, "fish", licensed);
    this.species = species;
}

/* Fish prototype object must be directed to the Pet prototype */
Fish.prototype = Object.create(Pet.prototype);

/* To reset the constructor property of the Fish prototype */
Object.defineProperty(Fish.prototype, 'constructor', {
    value: Fish,
    enumerable: false,
    writable: true
});

Fish.prototype.makesSound = function() {
    return this.name + " the " + this.species + " swims silently.";
};


function Dog(name, licensed, dangerous) {
    Pet.call(this, name, "dog", licensed);
    this.dangerous = dangerous;
}

Dog.prototype = Object.create(Pet.prototype);

Object.defineProperty(Dog.prototype, 'constructor', {
    value: Dog,
    enumerable: false,
    writable: true
});


/* create a Pet object using the new operator */
let pet1 = new Pet("Fluffy", "cat", true);
console.log(pet1);
document.getElementById("output").innerHTML = "<p>" + pet1.toString() + "</p>";

/* create a Fish object using the new operator */
let fish1 = new Fish("Sparkles", false, "goldfish");
console.log(fish1);
document.getElementById("output").innerHTML += "<p>" + fish1.toString() + "</p>";

/* Creates a Dog object */
let dog1 = new Dog("Fido", true, true);
console.log(dog1);
document.getElementById("output").innerHTML += "<p>" + dog1.toString() + "</p>";
