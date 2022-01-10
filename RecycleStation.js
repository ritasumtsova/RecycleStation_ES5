'use strict';

function RecycleStation(phone, adress) {
    this.__phone = phone;
    this.__adress = adress;
    this.__isOpen = false;
    this.__recycles = [];
    this.__recycleShop = null;
}

RecycleStation.prototype.getPhone = function () {
    return this.__phone;
};

RecycleStation.prototype.setPhone = function (phone) {
    this.__phone = phone;
};

RecycleStation.prototype.getAdress = function () {
    return this.__adress;
};

RecycleStation.prototype.setAdress = function (adress) {
    this.__adress = adress;
};

RecycleStation.prototype.getIsOpen = function () {
    return this.__isOpen;
};

RecycleStation.prototype.changeIsOpen = function () {
    this.__isOpen = !this.__isOpen;
};

RecycleStation.prototype.getRecycles = function () {
    return this.__recycles;
};

RecycleStation.prototype.addRecycle = function (recycle) {
    if (this.__isOpen) {
        this.__recycles.push(recycle);
        return true;
    } else {
        return false;
    };
};

RecycleStation.prototype.setRecycleShop = function (recycleShop) {
    this.__recycleShop = recycleShop;
};

RecycleStation.prototype.makeGoods = function () {
        this.__recycles.forEach(function (recycle) {
            switch (recycle.getName().toLowerCase()) {
                case 'plastic':
                    if (recycle.getRecyclingCount() < 4) {
                        this.__recycleShop.addGoods('clothes' + this.__recycles.indexOf(recycle));
                    };
                    break;
                case 'glass':
                    this.__recycleShop.addGoods('tableware' + this.__recycles.indexOf(recycle));
                    break;
                case 'paper':
                    if (recycle.getRecyclingCount() < 7) {
                        this.__recycleShop.addGoods('notebook' + this.__recycles.indexOf(recycle));
                    };
                break;
                default: 
                    return recycle.getColor() +  ' ' + recycle.getName() + ' cannot be recycle. Burn it.';
            };
        }.bind(this));
    
        this.__recycles = [];
};