let animals = ['Bartolomeu', 'Chiclete', 'Rubico', 'Chicô', 'Tarzan', 'Jack'];
let dogs = [];
let cats = [];

dogs.push(animals[0], animals[2], animals[4], animals[5]);
cats.push(animals[1], animals[3]);

console.log('Only Dogs: ')
for (let i = 0; i < dogs.length; i ++) {
  console.log(dogs[i]);
}
console.log('\n' + 'Only cats: ')
for (let j = 0; j < cats.length; j++) {
  console.log(cats[j]);
}
