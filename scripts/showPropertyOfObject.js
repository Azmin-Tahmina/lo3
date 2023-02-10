"use strict";

function showPropertyValuePair(object)
{
    let createString ="";

    for(const property in object)
    {
        // console.log("Property: "+property+ ", Value: "+ object[property]);
        if(object.hasOwnProperty(property))
        {
            createString += "Property: "+property+ ", Value: "+ object[property] +"</br>";
        }
        else{
            createString += "Property: "+property+"has not been included for this object</br>";
        }

    }

    return createString;
}