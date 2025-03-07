// var a=20  ; is not good methhod , it change value outside the scope - {}

let a=300// gobal
const b =400

if (true){

    let a=20// local; value change only inside the scope 
const b =40
console.log("INNER a : ",a);//20
console.log("INNER b: ",b);//40

}

console.log("OUTER a : ",a);//300
console.log("OUTER b : ",b);//400
