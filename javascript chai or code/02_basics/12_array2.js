const marvel_heros = ["THOR", "Ironman ", "spidderman"];
const dc_heros = ["batman", "superman ", "flash"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//['THOR','Ironman ','spidderman', [ 'batman', 'superman ', 'flash' ]]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros ); //[ 'THOR', 'Ironman ', 'spidderman', 'batman', 'superman ', 'flash' ]

// const al_heros = [...dc_heros,...marvel_heros]
// console.log(al_heros);//[ 'batman', 'superman ', 'flash', 'THOR', 'Ironman ', 'spidderman' ]

const arr1 = [1, 2, 3, [4, 5], [6, 7, 8, 9], 0, 11];
console.log(arr1); //[ 1, 2, 3, [ 4, 5 ], [ 6, 7, 8, 9 ], 0, 11 ]

const arr2 = arr1.flat(Infinity);
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]

console.log(Array.isArray("premsingh")); //false
console.log(Array.from("premsingh")); //['p', 'r', 'e','m', 's', 'i', 'n', 'g', 'h' ]
console.log(Array.from({ name: "premsingh" })); //[]

const a = 100;
const b = 200;
const c = 300;
const d = Array.of(a, b, c);
console.log(d); //[ 100, 200, 300 ]
