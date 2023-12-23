console.log('string %s has %d chars', 'string', 6, 'hoge');

//console.log('%o', String)


//console.clear()


const x = 1;
const y = 2;
const z = 3;

console.count('value' + x + 'and has been checked ... how many tymes?')
console.count('value' + y + 'and has been checked ... how many tymes?')
console.count('value' + z + 'and has been checked ... how many tymes?')
console.count('value' + x + 'and has been checked ... how many tymes?')


//
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];

oranges.forEach(fruit => {
  console.count(fruit);
});

apples.forEach(fruit => {
  console.count(fruit);
});

console.countReset('orange');

oranges.forEach(fruit => {
  console.count(fruit);
});
