/*
    File:   showprops.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/8/2019
    Purpose: Function to show all of the properties of an object
*/

/*
    Function:   showProps
    Purpose:    return a string that shows all of the properties of an object
    Parameters: title - title to display in the returned string
                object - object whose properties are to be displayed
    Returns:    a string consisting of the title, followed by each property name and value,
                each on a separate line
    Assumptions:    title is a string, object is an object, all properties of the object are
                    or can be converted into strings
 */
function showProps(title, object) {
    "use strict";

    let objectString = title + "<br />";

    // LOOP for all properties in the object
    for (const prop in object) {
        // Add the property name and value to the return string

        // if we don't want to see properties from along the prototype chain
        if (object.hasOwnProperty(prop)) {
            objectString += prop + " = " + object[prop] + "<br />";
        }
    }

    return objectString;
}
