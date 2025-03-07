// question 1

let arr1 = [1, 2, 3, 4, 5, 6];

/// map
let square = arr1.map((el) => el ** 2);
console.log(square);

// reduce
let sum = square.reduce((accomator, cur) => accomator + cur, 0);
console.log(sum);

let average = sum / arr1.length;
console.log(Math.floor(average));
// filter
let fil = arr1.filter((el) => el < 3);
console.log(fil);

// question 2
let aar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr3 = aar2.map((el) => el + 5);
console.log(arr3);

// Question 3
let arr4 = ["prem", "ravi", "bhupendra", "pradeep"];
let arr5 = arr4.map((el) => el.toUpperCase());

console.log(arr5);
let arr6 = arr5.map((el) => el.toLocaleLowerCase());
console.log(arr6);

// Quetion 4

const doleAndreturnarg = (arr7, ...args) => {
  console.log(arr7 + args);
  console.log(args);
};
doleAndreturnarg([12, 3, 2], 2, 34);

// question 5 merge object

let object1 = {
  name: "prem singh ",
  dob: "20/10/2005",
  study:"Btech",
};
let object2 = {
  name1: "hemant singh ",
  dob2: "09/09/2003",
  study3: "BA",
};
 let object3=(objec1,objec2)=>{
    const mergedObject = { ...objec1, ...objec2 };
    console.log(mergedObject);
    
   

 }
 object3(object1,object2)