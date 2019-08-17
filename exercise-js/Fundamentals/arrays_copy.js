let animals = ['Bartolomeu', 'Chiclete', 'Rubico', 'Chicô', 'Tarzan', 'Jack'];
let dogs = [];
let cats = [];

dogs.push(animals[0], animals[2], animals[4], animals[5]);
console.log('Only dogs: ' + `${dogs}`);

cats.push(animals[1], animals[3]);
console.log('Only cats: ' + `${cats}`);
