'use strict'

var recycle = new Recycle('plastic');
var greenPlastic = new Plastic('plastic', 2, 'green');
var bluePlastic = new Plastic('plastic', 8, 'blue');
var blackPlastic = new Plastic('plastic', 9, 'black');
var yellowPlastic = new Plastic('plastic', 1, 'yellow');
var recycleShop = new RecycleShop('+380939009393');
var recycleStation = new RecycleStation('+380505005050', 'Kharkiv');
var user = new User('+380939009090');

//recycleShop.addGoods('t-shirt');

recycleShop.addGoodsAsync('async table 1', function (error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
        recycleShop.addGoodsAsync('async table 2', function (error, data) {
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                recycleShop.addGoodsAsync('async table 3', function (error, data) {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});