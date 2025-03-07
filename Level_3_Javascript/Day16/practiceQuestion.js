// questoin 1
let msg="   help   "
let p=msg.trim().toUpperCase()
console.log(p);

// question 2

let nam='premsinghlodhi'
let lastName=nam.slice(9)
console.log(lastName)
let c=lastName.replace('l',"t")
console.log(c);

// question 3

let months=['jan','feb','march','arpil','may']
// console.log(months.pop())
console.log(months.shift())
console.log(months);
//console.log(months.push('july'));

console.log(months.unshift('july'));
console.log(months);

// question 4

let romies=['naitik','pradeep',"ravi",'bhupendra']
let newromi=romies.splice(0,1,'prem')
console.log(romies);

// question 5

let arr=['html','css','bootstrap','javascript','java','cpp','python']
console.log(arr.reverse().indexOf('javascript'));



