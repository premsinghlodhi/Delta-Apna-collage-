
/*  
Nullish Coalescing Operator (??) : null , undefined

*/
 
let  val1 = 10??35
let val2= null ?? 10
let val3= undefined?? 10
console.log(val1);
console.log(val2);
console.log(val3);






// Teritary Operator 
// syntax : condition ? true : false

const iceteaprice =100
iceteaprice>=80? console.log("less than 80 "): console.log("more than 80");






/*
falsy value:-
 false
 0
 -0
 bigint 0n
 null 
 undefined
 nan
*/
/* 
 tuthy values
  "0"
  'false'
   " "
   []
   {}
   function(){}


*/

const array = [3, 3, 4];

if (array.length === 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log(" object is empty");
} else {
  console.log("object is not empty");
}
