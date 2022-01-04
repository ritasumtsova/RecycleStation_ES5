'use strict';

function Plastic(name, recyclingCount, weight, color) {
    Recycle.call(this, name, recyclingCount);
    this.__weight = weight;
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