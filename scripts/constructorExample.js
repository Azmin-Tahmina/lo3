"use strict";

function petConstructor(name,type,license) // parent constructor
{
    this.name = name;
    this.animalType = type;
    this.license = license;
    //this is another way
    // this.toString = function (){
    //
    // }
}

petConstructor.prototype.toString = function (){
    return this.name + " is a(n) " + this.animalType + " whose licensed status is " + this.license;
}

let pet = new petConstructor("dog","animal",true);
console.log(pet.toString());


//how the inheritance can be implemented:

function fishConstructor(name,license,species) // child constructor
{
    petConstructor.call(this, name,"fish",license);
    this.species = species;
}

fishConstructor.prototype = Object.create(petConstructor.prototype);

Object.defineProperty(fishConstructor.prototype,"constructor",
{
    value: fishConstructor,
    enumerable: false,
    writable: true
})

let fish = new fishConstructor("Nemo",true,"goldfish");
console.log(fish.toString());



