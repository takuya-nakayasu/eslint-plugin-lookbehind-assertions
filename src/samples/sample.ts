const oranges = ['ripe orange A ', 'green orange B', 'ripe orange C'];

let ripe_oranges = oranges.filter((fruit) => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges);

const re = new RegExp('(?<=ripe )orange');

ripe_oranges = oranges.filter((fruit) => fruit.match(re));
console.log(ripe_oranges);

const str = '(?<=ripe )orange';

const re2 = new RegExp(str);

ripe_oranges = oranges.filter((fruit) => fruit.match(re2));
console.log(ripe_oranges);
