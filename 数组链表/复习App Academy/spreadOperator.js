// spread array

let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6];

console.log(moreNums);

// spread objects

let colors = { red: 'scarlet', blue: 'aquamarine' };
let newColors = { ...colors };

console.log(newColors);

let colors2 = { green: 'forest', yellow: 'sunflower' };
let moreColors = { ...colors, ...colors2 };

console.log(moreColors);
