"use strict";
var oranges = ['ripe orange A ', 'green orange B', 'ripe orange C'];
var ripe_oranges = oranges.filter(function (fruit) { return fruit.match(/(?<=ripe )orange/); });
console.log(ripe_oranges);
var re = new RegExp('(?<=ripe )orange');
ripe_oranges = oranges.filter(function (fruit) { return fruit.match(re); });
console.log(ripe_oranges);
