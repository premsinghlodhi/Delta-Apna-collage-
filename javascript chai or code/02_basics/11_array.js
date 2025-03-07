//Array
let arr1 = [1, 2, 3, 4, 5, 6];
console.log('\n');

console.log(arr1[3]); //4

console.log('\n');
arr1.push(9);
console.log(arr1); //[1,2,3,4 ,5,6,9]

console.log('\n');
arr1.pop();
console.log(arr1); //[1,2,3,4 ,5,6]

console.log('\n');
arr1.unshift(9);
console.log(arr1); //[9,1,2,3,4 ,5,6]
console.log(arr1); //[1,2,3,4 ,5,6]
console.log('\n');

arr1.shift();
console.log('\n');

console.log(arr1.includes(8)); //false
console.log(arr1.indexOf(3)); //2
console.log('\n');

const aar2 = arr1.join();
console.log(arr1); //[1,2,3,4 ,5,6]
console.log(aar2); //1,2,3,4 ,5,6
console.log(typeof aar2); //string

console.log('\n');
console.log('\n');
// slice , splice

let arr3 = arr1
console.log( 'A' ,arr3);//A [ 1, 2, 3, 4, 5, 6 ]
console.log( arr3.slice(2,5));//[ 3, 4, 5 ]
console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]
console.log('\n');


console.log("B", arr3);//B [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3.splice(2,3));//[ 3, 4, 5 ]
console.log(arr3);//[ 1, 2, 6 ]





