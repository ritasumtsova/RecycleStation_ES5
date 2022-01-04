'use strict';

function Recycle(name, recyclingCount) {
    this._name = name;
    this._recyclingCount = recyclingCount;
}

Recycle.prototype.getName = function () {
    return this._name;
};

Recycle.prototype.setName = function (name) {
    this._name = name;
};

Recycle.prototype.getRecyclingCount = function () {
    return this._recyclingCount;
};

Recycle.prototype.setRecyclingCount = function (amount) {
    this._recyclingCount = amount;
};