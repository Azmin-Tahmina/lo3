"use strict";

/*
    File:   pet_example_new.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/1/2019
    Purpose: 
*/


/* using new ES2015 syntax */
class Pet {
    constructor(name, type, licensed) { /* create constructor function using constructor keyword */
        this.name = name;
        this.animalType = type;
        this.licensed = licensed;
    }

    toString() { /* methods go inside the class definition */
        return this.name + " is a(n) " + this.animalType + " whose licensed status is " + this.licensed;
    }

    makesSound() {
        return this.name + " the " + this.animalType + " makes noise.";
    }
}


class Dog extends Pet { /* use the extends keyword to create a subclass */
    constructor(name, licensed, dangerous) {
        super(name, "dog", licensed); /* makes a call to the parent's constructor with super */
        this.dangerous = dangerous;
    }

    makesSound() {
        return this.name + " the dog " + (this.dangerous ? " barks angrily" : " says woof and wags its tail");
    }
}


/* create a Pet object using the new operator */
let pet1 = new Pet("Fluffy", "cat", true);
console.log(pet1);
document.getElementById("output").innerHTML = "<p>" + pet1.toString() + "</p>"
        + "<p>" + pet1.makesSound() + "</p>";

/* Creates a Dog object */
let dog1 = new Dog("Fido", true, false);
console.log(dog1);
document.getElementById("output").innerHTML += "<p>" + dog1.toString() + "</p>"
    + "<p>" + dog1.makesSound() + "</p>";
