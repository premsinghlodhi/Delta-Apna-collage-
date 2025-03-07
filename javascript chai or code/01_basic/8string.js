const name = "premsingh";
const repocount = 50;

console.log(`my name is ${name} and my repocount is ${repocount} `);

const gamename = new String("Premsingh");
console.log(gamename[3]);
console.log(gamename.length);
console.log(gamename.charAt(5));
console.log(gamename.toUpperCase());
console.log(gamename.codePointAt());
console.log(gamename.indexOf("e"));
console.log(gamename.substring(0, 4));
console.log(gamename.slice(-8, 4));

const newstring = "    rohitsharma   ";
console.log(newstring); //     rohitsharma
console.log(newstring.trim()); //rohitsharma
console.log(newstring.trimEnd()); //    rohitsharma
console.log(newstring.trimStart()); //rohitsharma

const URL = "https://www.adobe.com/in/#prem$acrobat";
console.log(URL.replace("#prem$", "singh")); //https://www.adobe.com/in/singhacrobat

console.log(URL.includes("Singh")); //false
console.log(URL.split("/")); //[ 'https://www.', 'dobe.com/in/#prem$', 'crob', 't' ]
