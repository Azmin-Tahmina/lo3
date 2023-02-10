"use strict";

/*
 Filename:    Instructor.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Date:        Winter 2020
 Purpose:     Constructor for Instructor objects
*/

// first way of creating Instructor objects - traditional JavaScript notation
function Instructor(name, office, quirks) {
    this.name = name;
    this.officeNumber = office;
    this.quirks = quirks;

    this.greet = function() {
        return this.name + " says hi";
    };

    // This would repeat the displayInfo function in each object
    // this.displayInfo = function() {
    //     return this.name + " is in " + this.officeNumber
    //         + " and is " + this.quirks;
    // };
}

Instructor.prototype.program = "CST";

Instructor.prototype.displayInfo = function() {
    return this.name + " is in " + this.officeNumber
        + " and is " + this.quirks + " (program: " + this.program + ")";
};
