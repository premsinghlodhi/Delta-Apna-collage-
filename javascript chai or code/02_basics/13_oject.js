//singleton


// object literal
const mysym= Symbol("key1")
const object1={
    name : "prem singh",
    collage: "lnct",
    enrollemt_no :"0103AL231150",
    branch : "aiml",
section : " b",
[mysym] : "key1",



}


console.log(object1.enrollemt_no);//0103AL231150
console.log(object1["name"]);//prem singh
console.log(typeof object1[mysym]);//key1

object1.greeting = function (){
    console.log("hello everyone,");
    
}

object1.greetingtwo = function (){
    console.log(`hello i am,${this.name}`);
    
}
console.log(object1.greeting());//hello i am,
console.log(object1.greetingtwo());//hello i am,prem singh


object1.name ="ankur"
console.log(object1.name);//ankur ; changed
Object.freeze(object1 )
object1.enrollemt_no = "nfjhg44545768"
console.log(object1.enrollemt_no);//0103AL231150 ; not changed







 