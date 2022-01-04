'use strict';

function User(phone) {
    this.__name = 'User';
    this.__phone = phone;
    this.__goods = [];
    this.__recycles = [];
    this.__recycleStation = null;
    this.__recycleShop = null;
}

User.prototype.getName = function () {
    return this.__name;
};

User.prototype.setName = function (name) {
    this.__name = name;
};

User.prototype.getPhone = function () {
    return this.__phone;
};

User.prototype.setPhone = function (phone) {
    this.__phone = phone;
};

User.prototype.getGoods = function () {
    return this.__goods;
};

User.prototype.setRecycleShop = function (recycleShop) {
    this.__recycleShop = recycleShop;
};

User.prototype.setRecycleStation = function (recycleStation) {
    this.__recycleStation = recycleStation;
};

User.prototype.getRecycles = function () {
    return this.__recycles;
};

User.prototype.addRecycle = function (recycle) {
    this.__recycles.push(recycle);
};

User.prototype.giveRecycle = function () {
    if (this.__recycles.length > 0) {
        var success = null;

        this.__recycles.forEach(function (recycle) {
            success = this.__recycleStation.addRecycle(recycle);
        }.bind(this));
        
        if (success) {
            this.__recycles = [];
            return 'Great! Your recycles were taken.';
        } else {
            return 'Error. The station is closed. Try again later.';
        }

    } else {
        return 'You have no recycles to give.'
    }
};

User.prototype.buyGoods = function (goods) {
    var good = this.__recycleShop.buyGoods(goods);

    if (good) {
        this.__goods.push(good);
    }

    return good;
};
