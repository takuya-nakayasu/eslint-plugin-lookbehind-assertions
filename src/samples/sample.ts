let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C'];

let ripe_oranges = oranges.filter((fruit) => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges);

let re = new RegExp('(?<=ripe )orange');

ripe_oranges = oranges.filter((fruit) => fruit.match(re));
console.log(ripe_oranges);
