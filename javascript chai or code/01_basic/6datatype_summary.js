/**
 * Primitive
 * 7 type; string ,number, boolean , null, undefined , symbol, bigint
 *
 * Non primitive ;(refernce)
 * Array ,objects, functions
 *
 */
// Primitive DataType

const score = 100; // number
const scorevalue = 100.3; //number

const isloggedin = false; //boolean
const untsidetemp = null; //null
let useremail; // undefined

const id = Symbol("123"); //symbol
const anotherid = Symbol("123"); //symbol
console.log(anotherid === id);

const bidNumber = 2562485113n;

// Non-Primitive dataType

const heros = ["Spiderman", "Thor", "IRONMAN"];// array
let myobj = {
  name: "prem",
  branch: "AIML",
};//object

const myfunction = function () {
  console.log("hello world");
};//function
