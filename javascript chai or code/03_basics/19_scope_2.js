function one(){
const username = "itz.pr3m"


function two(){

    let website = "www.google.com"
console.log(username)
}
 two()
 // console.log(website); will not excute , outside the scope

}

one()


/////////////////////////////////////////
console.log(addone(5));//6


function addone (num1){
    return num1 +1
}

/////////////////////////////////////// 


//console.log(addtwo(6));// not run 
const  addtwo= function (num2){
    return num2+2
}
console.log(addtwo(6));
