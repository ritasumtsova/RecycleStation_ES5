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

RecycleStation.prototype.open = function () {
    this.__isOpen = true;
};

RecycleStation.prototype.close = function () {
    this.__isOpen = false;
};

RecycleStation.prototype.getRecycles = function () {
    return this.__recycles;
};

RecycleStation.prototype.setRecycleShop = function (recycleShop) {
    this.__recycleShop = recycleShop;
};

RecycleStation.prototype.addRecycle = function (recycle) {
    if (this.__isOpen) {
        this.__recycles.push(recycle);
        return true;
    } else {
        return false;
    };
};

RecycleStation.prototype.makeGoods = function () {
    // for (var i = 0; i < this.__recycles.length; i++) {
    //     switch (this.__recycles[i].getName().toLowerCase()) {
    //         case 'plastic':
    //             if (this.__recycles[i].getRecyclingCount() < 4) {
    //                 this.__recycleShop.addGoods('clothes' + [i]);
    //             };
    //             break;
    //         case 'glass':
    //             this.__recycleShop.addGoods('tableware' + [i]);
    //             break;
    //         case 'paper':
    //             if (this.__recycles[i].getRecyclingCount() < 7) {
    //                 this.__recycleShop.addGoods('notebook' + [i]);
    //             };
    //             break;
    //         default: 
    //             return this.__recycles[i].getColor() +  ' ' + this.__recycles[i].getName() + ' cannot be recycle. Burn it.';
    //     };
    // };

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