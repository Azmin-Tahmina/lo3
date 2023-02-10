"use strict";

/*
    File:   pet_example_new.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/1/2019
    Purpose: 
*/

/* using new ES2015 syntax */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pet = function () {
    function Pet(name, type, licensed) {
        _classCallCheck(this, Pet);

        /* create constructor function using constructor keyword */
        this.name = name;
        this.animalType = type;
        this.licensed = licensed;
    }

    _createClass(Pet, [{
        key: "toString",
        value: function toString() {
            /* methods go inside the class definition */
            return this.name + " is a(n) " + this.animalType + " whose licensed status is " + this.licensed;
        }
    }, {
        key: "makesSound",
        value: function makesSound() {
            return this.name + " the " + this.animalType + " makes noise.";
        }
    }]);

    return Pet;
}();

var Dog = function (_Pet) {
    _inherits(Dog, _Pet);

    /* use the extends keyword to create a subclass */
    function Dog(name, licensed, dangerous) {
        _classCallCheck(this, Dog);

        /* makes a call to the parent's constructor with super */
        var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name, "dog", licensed));

        _this.dangerous = dangerous;
        return _this;
    }

    _createClass(Dog, [{
        key: "makesSound",
        value: function makesSound() {
            return this.name + " the dog " + (this.dangerous ? " barks angrily" : " says woof and wags its tail");
        }
    }]);

    return Dog;
}(Pet);

/* create a Pet object using the new operator */


var pet1 = new Pet("Fluffy", "cat", true);
console.log(pet1);
document.getElementById("output").innerHTML = "<p>" + pet1.toString() + "</p>" + "<p>" + pet1.makesSound() + "</p>";

/* Creates a Dog object */
var dog1 = new Dog("Fido", true, false);
console.log(dog1);
document.getElementById("output").innerHTML += "<p>" + dog1.toString() + "</p>" + "<p>" + dog1.makesSound() + "</p>";