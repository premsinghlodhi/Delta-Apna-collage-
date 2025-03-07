// Quetion 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let arrayName = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum = sum + arr[i];
  }
  console.log(sum);
};
console.log("the sum of arr number");
arrayName(arr);

// queation 2

let num = 23;
let evenNumber = (num) => {
  if (num % 2 == 0) {
    console.log(`The given number ${num} is even number `);
  } else {
    console.log("It is not a even number ");
  }
};
evenNumber(num);

//  Question 3
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);

// Queston 4
let length = 4;
function callback() {
    
  console.log(this.length);
}
callback();
const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object1.method(callback);
console.log(object1.length);

