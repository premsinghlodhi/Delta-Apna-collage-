// const myfriend = ["r", "b", "p", "s", "a"];

// for (const name of myfriend) {
//   console.log(name);
// }

// const greeting = "hello world"
// for (const greet of greeting) {
//     console.log("each char of greet ", greet);

// }

///////////////////////////////////////////
/////MAP

// const map = new Map ()
// map.set('IN',"India")
// map.set('USA','united states')
// map.set('PAK','pakistan')
// map.set('IN',"India")
// console.log(map);

// for (const [key,value] of map) {
//   console.log(key,':-',value);

// }

///////////////////////////////

// const object ={
//  ai: "AL304",
//  ds: "AL303",
// oop :"AL305"
// }

// for (const [key,value] of object) {

//   console.log(key,':- ',value);

// }   //object is not iterable

// const object ={
//  ai: "AL304",
//  ds: "AL303",
// oop :"AL305",
// mt: "AL302",
// tc:"AL301",
// }

// for (const key in object) {
//   //console.log(key);
//   //console.log(object[key]);

//   console.log(`${key} subject code is \t : ${object[key]}`);

// }

const myarr = ["prem ", "ravi", "bhupendra", "pradeep"];

// forof loop 

for (const key in myarr) {
  //console.log(key);
  console.log(`  ${key} my roomates are${myarr[key]}`);
}
console.log("\n\n");

// forin  loop 

for (const key of myarr) {
  console.log(key);
  console.log(myarr[key]);
}
console.log("\n\n");

// for each loop

myarr.forEach( function (item){
  console.log(item);
  
})

