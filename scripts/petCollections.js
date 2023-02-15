"use strict";


function petConstructor(name,type,license,image) // parent constructor
{
    this.name = name;
    this.animalType = type;
    this.license = license;
    this.image = image;
}

petConstructor.prototype.showData = function()
{
    document.getElementById("name").innerHTML = this.name;
    document.getElementById("type").innerHTML = this.animalType;
    document.getElementById("license").innerHTML = this.license;
    document.getElementById("image").innerHTML = this.image;
}

