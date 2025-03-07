//  Que1.) Create a traffic light system that show what to do based color.
let color="red";
if(color='red'){
    console.log('you cannot go!!')

}
if(color=='green')
{
    console.log('you can go!!')

}
if(color=='yellow')
{
    console.log('please wait a minute!!')

}
 //Que2). crreate a system to calculate popcorn price based on the size cutomer asked for:

 let size;
 size="XL";

 if(size=="XL"){
    console.log(`The price of ${size} popcorn is 250 Rs/-`);
    
 }
 else if(size=='L'){
    console.log(`The price of ${size} popcorn is 200 Rs/-`);
    
 }
 else if(size=='M'){
    console.log(`The price of ${size} popcorn is 100 Rs/-`);
    
 }
 
  else if(size=='S'){
    console.log(`The price of ${size} popcorn is 50 Rs/-`);
    
 }

 // Que3). A 'good string' is a string that start with the letter 'a & has a length >3.write a program to find if a string is good or not.'
 let str='kur'

 if(str[0]='a'&& str.length>=4){
    console.log(`${str} is a good string `);
    
 }
 else{
    console.log(`${str} is no a good string`);
    
 }

 // Que4). predict the output of foolowing code:
 let num =12;
 if ((num%3===0)&&(num+1==15)||(num-1==11)){
    console.log("safe")

 }else{
    console.log("unsafe");
    
 }

 // Que5). use swtich statement to print the day of the week using a number variable 'day' with values 1 to 7.
 
 let day;
 day=2;

 switch (day) {
    case 1:
        console.log("Monday ");
        break;
    case 2:
        console.log("tuesday ");
        
        break;
    case 3:
        console.log(" wednesday ");
        break;
    case 4:
        console.log(" thrusday");
        break;
    case 5 :
        console.log(" friday");
        break;
        
    case 6 :
        console.log(" saturday");
        break;
    case 7 :
        console.log(" sunday");
        break;

 
    default:
        console.log("invalid ");
        break;
 }