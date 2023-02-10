"use strict";

// instructorConstructor ---> instructorConstructor prototype
// object instructor1 ------> instructorConstructor prototype
// object instructor1 ------> instructorConstructor prototype
// object instructor1 ------> instructorConstructor prototype
// object instructor1 ------> instructorConstructor prototype
// ........           ------> instructorConstructor prototype


function instructorConstructor(firstName,lastName,roomNumber,courses)
{
    this.fname = firstName;
    this.lName = lastName;
    this.rNumber = roomNumber;
    this.courseTaken = courses;

    this.greet = function ()
    {
       document.write("<p>"+"HI :" + this.fname+ " "+this.lName+"</p>");
    }
}