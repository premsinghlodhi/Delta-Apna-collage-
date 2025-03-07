const arry = ["p", "r", "e", "m"];

arry.forEach((element) => {
  console.log(element);
});

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];

const newnums = mynums.filter((num) => num > 4);
console.log(newnums);

const new2nums = [];
mynums.forEach((num) => {
  if (num < 5) {
    new2nums.push(num);
  }
});
console.log(new2nums);

//////////////////////FILTER EAXMPLE///////////////

const student = [
  {
    name: "prem singh",
    Age: 19,
    course: "btech",
    branch: "aiml",
  },

  {
    name: "pradeepprathore",
    Age: 18,
    course: "BBA",
    branch: "ac",
  },
  {
    name: "ravi vishkarma",
    Age: 19,
    course: "btech",
    branch: "aids",
  },
  {
    name: "bhupendra rathore",
    Age: 21,
    course: "btech",
    branch: "aids",
  },
  {
    name: "naitik jain",
    Age: 19,
    course: "btech",
    branch: "aiml",
  }

];
let infrom=student.filter( (detail)=>detail.Age===19)
console.log(infrom);

 infrom=student.filter( (detail)=>detail.branch==="aids"&&detail.Age===19)
console.log(infrom);

///////////////////////MAP EXAMPLE//////////////////////////////
 
const a= [1,2,3,4,5,6,7,8,9]
let b= a.map((num)=> num*10)
console.log(b);

b= a
.map((num)=> num*10)
.map((num)=>num+6)
.filter((num)=>num>=45)
console.log(b);
