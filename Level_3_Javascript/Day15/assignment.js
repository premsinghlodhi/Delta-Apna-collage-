//Qsl . Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

let num;
num=100
if (num%10==0)
{
    console.log('good');
    
}else{
    console.log('bad');
    }


/*Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting their name & age) .
name is age years old. 
[Use template Literals to print this sentence]
 */

// let name = prompt("please wait user name");
// let age = prompt("please wait user age");
// alert(`${name} is ${age} years old `)


/*  
Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December
[Use the number as the case value in switch]

*/





let quarter;
quarter=3;

switch (quarter) {
    case 1 :
        console.log('January, February, March');
        
        break;
    case 2:
        console.log('April, May, June');
        
        break;
    case 3:
        console.log('July, August, September');
        
        break;
    case 4 :
        console.log('October, November, December');
        
        break;

    default:
        console.log('Invalid');
        
        break;
}

/* 
Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
For a given string print if it is golden or not.

*/ 
let str;
str='Arem'

if((str[0]=='A'||str[0]=='a')&& str.length>=6){
    console.log('golden string');
    
}else {
    console.log('not a golden string ');
    
}
/* 
Qs5. Write a program to find the largest of 3 numbers.
*/
let a=100;
let b=200;
let c=300;

// if(a>b){
//     if(a>c){
//         console.log(`${a} is greatest amongs three number`);
        
//     }
//     else{
//         console.log(`${c} is greatest amongs three number `);
//         }
// }
// else if(b>c) {
//     console.log(`${b} is the greatest amongs three number`);
    

// }

let d=a>b?(a>c?"a":"c"):(b>c?"b":"c");
let x=d.valueOf();


console.log(x);


console.log(d+"="+x+"is greatest amongs three number");