// node file
console.log("hello Nodejs");
//....................................................................................

// Node REPL
//.....................................................................................
// process.argv

// console.log(process.argv);
// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//   console.log(args[i]);
// }
//.........................................................................................

// Export in file
// require() => a built-in funstion to include external modules that exit in separate file
// module.exports => a special object

const sum=(a,b)=>(a+b);
const sub=(a,b)=>(a-b)
const mutli=(a,b)=>(a*b)
const div=(a,b)=>(a/b)

module.exports={
    sum:sum,
    sub:sub,
    multi: mutli,
    div:div
}
// what is npm => standard package manager



