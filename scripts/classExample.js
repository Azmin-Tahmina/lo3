"use strict";

class petClass{
    constructor(name,type,license) {
        this.name = name;
        this.type = type;
        this.license = license;
    }

    toString()
    {
        return this.name + " is a(n) " + this.type + " whose licensed status is " + this.license;
    }

    makeSound()
    {
        return this.name + " the " + this.type + " makes noise.";
    }
}


class dogClass extends petClass{
    constructor(name,license,dangerous) {
        super(name,"animal",true);
        this.dangerous = dangerous;
    }

    makeSound() {
        return this.name + " the dog " + (this.dangerous ? " barks angrily" : " says woof and wags its tail.");
    }

}

let dog = new dogClass("Fido",true,false);
console.log(dog.toString());
console.log(dog.makeSound());

