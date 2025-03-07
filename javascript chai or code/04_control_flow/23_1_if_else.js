/* 
1] If

if (condition)
{
   * statement*
}
if condition is true then it call the given statement , 
if condition is false then it simpify exit 

*/
const temprature = 56;

if (temprature < 50) {
  console.log("not too hot ");
}

else if (temprature > 50) {
  console.log(" too hot today");
}
else if (temprature === 50) {
  console.log(" moderate heat today");
} 
else {
   console.log("error");
   
}


///////////////////////////////////////////////////


const usreloggedin= true
const loggedwithgmail= true

if (usreloggedin && loggedwithgmail){
   console.log("you are succesfully logged in ");
   
}
else {
   console.log("unable to logged in");
   
}

///////////////////////////////////////////////

const indian = true
const batsmen = false

if (indian || batsmen){
   console.log("\nyou are able to play ipl ");
   
}