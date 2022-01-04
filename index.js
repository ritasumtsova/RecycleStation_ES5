'use strict'

var recycle = new Recycle(5);
var greenPlastic = new Plastic('plastic', 2, 10, 'green');
var bluePlastic = new Plastic('plastic', 1, 8, 'blue');
var blackPlastic = new Plastic('plastic', 9, 34, 'black');
var yellowPlastic = new Plastic('plastic', 1, 46, 'yellow');
var recycleShop = new RecycleShop('+380939009393');
var recycleStation = new RecycleStation('+380505005050', 'Kharkiv');
var user = new User('+380939009090')

// recycleShop.addGoods('t-shirt');
// recycleShop.addGoods('glasses');
// recycleShop.addGoods('pants');


//var recycleShopContext = recycleShop.addGoodsAsync.bind(recycleShop);
// 1
// recycleShop.addGoodsAsync('async table 1', function (goods) {
//     this.__goods.push(goods);
//     console.log(this.getGoods());
//     recycleShop.addGoodsAsync('async table 2', function (goods) {
//         this.__goods.push(goods);
//         console.log(this.getGoods());
//         recycleShop.addGoodsAsync('async table 3', function (goods) {
//             this.__goods.push(goods);
//             console.log(this.getGoods());
//         }.bind(recycleShop))
//     }.bind(recycleShop))
// }.bind(recycleShop));

// 2
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





















 recycleStation.open();
 recycleStation.addRecycle(bluePlastic);
 recycleStation.addRecycle(greenPlastic);
 console.log(recycleStation.getRecycles());

recycleStation.setRecycleShop(recycleShop);
console.log(recycleStation.makeGoods());
console.log(recycleShop.getGoods());
//  console.log(user);
 user.addRecycle(blackPlastic);
 user.addRecycle(yellowPlastic);
 user.setRecycleShop(recycleShop);
 user.setRecycleStation(recycleStation);
 console.log(user.buyGoods('clothes1'));
 console.log(recycleShop.getGoods());

recycleStation.close();

console.log(user.giveRecycle() + 'func res');
// console.log(recycleStation.getRecycles());