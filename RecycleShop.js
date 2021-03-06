'use strict';

function RecycleShop(phone) {
    this.__phone = phone;
    this.__goods = [];
}

RecycleShop.prototype.getPhone = function () {
    return this.__phone;
};

RecycleShop.prototype.setPhone = function (phone) {
    this.__phone = phone;
};

RecycleShop.prototype.getGoods = function () {
    return this.__goods;
};

RecycleShop.prototype.addGoods = function (goods) {
    this.__goods.push(goods);
};

RecycleShop.prototype.addGoodsAsync = function (goods, callback) {
    setTimeout(
      function () {
        var error;
        var data;

        if (this.__goods.length < 3) {
            this.__goods.push(goods);
            data = this.getGoods();
        } else {
            error = new Error('The storage is full')
        }

        callback(error, data);
      }.bind(this), 3000
    );
  };
  

RecycleShop.prototype.buyGoods = function (goods) {
    var purchase = null;

    this.__goods.forEach(function (good) {
        if(good === goods) {
            purchase = good;
            this.__goods.splice(this.__goods.indexOf(good), 1);
        }
    }.bind(this));

    if (purchase) {
        return purchase;
    } else {
        return null;
    }
};

