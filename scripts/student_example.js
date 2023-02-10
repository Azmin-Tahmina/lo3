"use strict";

/*
    File:   student_example.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/1/2019
    Purpose: Demonstrate objects with Students
*/

function Student(first, middle, last, mark) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.mark = mark;
}

Student.prototype.toString = function() {
    return this.first + " " + this.middle + " " + this.last + " has a mark of " + this.mark;
};

Student.prototype.initials = function() {
    return this.first.charAt(0) + this.middle.charAt(0) + this.last.charAt(0);
};


let student1 = new Student("Michael", "Andrew", "Grzesina", 80);
let student2 = new Student("Coralee", "", "Kaban", 80);

document.getElementById("output").innerHTML = "<p>" + student1.toString() + "<br />"
        + student1.initials() + "</p>";
document.getElementById("output").innerHTML += "<p>" + student2.toString() + "<br />"
    + student2.initials() + "</p>";