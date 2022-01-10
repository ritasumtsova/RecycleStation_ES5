'use strict';

function Plastic(name, recyclingCount, color) {
    Recycle.call(this, name, recyclingCount);
    this.__weight = 0;
    this.__color = color;
}

Plastic.prototype = Object.create(Recycle.prototype);
Plastic.prototype.constructor = Plastic;

Plastic.prototype.getWeight = function () {
    return this.__weight;
};

Plastic.prototype.setWeight = function (weight) {
    this.__weight = weight;
};

Plastic.prototype.getColor = function () {
    return this.__color;
};

Plastic.prototype.setColor = function (color) {
    this.__color = color;
};