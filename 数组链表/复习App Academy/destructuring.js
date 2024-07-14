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
