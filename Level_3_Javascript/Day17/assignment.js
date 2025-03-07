// question 1
let arr = [1, 2, 3, 4, 5, 2, 6, 2, 7, 2, 8, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// question 2

let num1 = 287152;
let num2 = num1.toString();
console.log(num2.length);

// let count = 0;
// let copy=num1;

// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// question 3

let count = 0;
let copy = num1;
let sum = 0;

while (copy > 0) {
  digit = copy % 10;
  sum += digit;
  copy = Math.floor(copy / 10);
}
console.log(sum);

// question 4
let n = 5;
let a = 1;
for (i = 1; i <= n; i++) {
  a = i * a;
}
console.log(a);

// question 5

let ar = [1, 15, 2, 46, 5, 2, 56, 4];
let largest = 0;
for (let i = 0; i < +ar.length; i++) {
  if (largest < ar[i]) {
    largest = ar[i];
  }
}

console.log(largest);
