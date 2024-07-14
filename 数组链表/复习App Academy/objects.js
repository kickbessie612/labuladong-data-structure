let car = {};
console.log(car);

car.color = 'Blue';
car.seat = 2;

console.log(car);

// let myDog = {
//   name: 'Fido',
//   type: 'Doge',
//   age: 2,
//   favoriteToys: ['bone', 'ball']
// };

// console.log(myDog);

let myDog = {};
myDog.name = 'Fido';

let myKey = 'name';
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

//  myDog[myKey] = myDog['name']

// myDog.myKey = myDog
console.log(myDog.myKey); // prints: undefined

let obj = { name: 'Rose', cats: 2 };

for (let currentKey in obj) {
  let value = obj[currentKey];
  console.log(currentKey);
  console.log(value);
}

function catBuilder(name, color, toys) {
  let cat = { name: name, color: color, toys: toys };
  return cat;
}

console.log(catBuilder('Whiskey', 'black', 'yarn'));

//
