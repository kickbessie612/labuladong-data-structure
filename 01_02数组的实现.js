// 数组的增、删、查、改

// ******增*******
// 在数组尾部添加一个元素
const arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log('arr1', arr1); //[1,2,3,4,5]

// 在数组头部添加一个元素
const arr2 = [1, 2, 3, 4];
arr2.unshift(0);
console.log('arr2', arr2); //[0,1,2,3,4]

// 在index位置添加一个元素
const arr3 = ['Monday', 'Wednesday', 'Thursday'];
arr3.splice(1, 0, 'Tuesday');
console.log('arr3', arr3); //['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// ******删******
// 删除数组最后一个元素并返回
const arr4 = [1, 2, 3, 4, 5];
arr4.pop();
console.log('arr4', arr4); //[1,2,3,4]

// 删除数组第一个元素并返回
const arr5 = [0, 1, 2, 3, 4];
arr5.shift();
console.log('arr5', arr5); //[1,2,3,4]

// ？？？？ 删除index对应的元素并返回
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1);
console.log('arr8', arr8); //[1,2,4,5]

// ******查******
// 返回index对应的元素
const arr6 = [1, 2, 3, 4, 5];
console.log('arr6', arr6[1]); //2

// ******改******
// 将index的元素改为element并返回之前的元素
const arr7 = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];
arr7.splice(3, 1, 'Thursday');
console.log('arr7', arr7); //['Monday', 'Tuesday', 'Wednesday', 'Thursday']
