// Destructure an array to reference specific elements

let numArray = [10, 20];

// here we are "unpacking" the array values into two separate variables
let [firstEl, secondEl] = numArray;

console.log(firstEl); //=> 10
console.log(secondEl); //=> 20

let animalArray = ['tiger', 'hippo'];

let animal1, animal2;

// here we are "unpacking" the array values into two separate variables
[animal1, animal2] = animalArray;

console.log(animal1); //=> "tiger"
console.log(animal2); //=> "hippo"

// Swapping

let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];

console.log(num1); // 3
console.log(num2); // 17

//Destructuring objects into variables
let obj = { name: 'Apples', breed: ['tabby', 'short hair'] };
let { name, breed } = obj;

console.log(name); // "Apples"
console.log(breed); // ["tabby", "short hair"]

// matching object properties
let { a, c } = { a: 1, b: 2, c: 3 };
a; //=> 1
c; //=> 3

// aliased object destructuring
let fruitObj = { apple: 'red', banana: 'yellow' };
let { apple: newApple, banana: newBanana } = fruitObj;

console.log(newApple); // "red"
console.log(newBanana); // "yellow"
