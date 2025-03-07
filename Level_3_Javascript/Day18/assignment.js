// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.


// quetion 1].

let random=Math.floor((Math.random()*6)+1)
console.log(`the dice no. is ${random}`)

// Question 2].

let car = {
    name:"BMW",
    model:"b134",
    color:"black"
}
console.log(car);
console.log(car.name);

/// Quetion 3]'

let person ={
    name:"Prem singh lodhi",
    age:"20years",
    city:"bhopal"

}
console.log(person);
person.city="newyork"
console.log(person.city);
console.log(person);
person.country="USA"
console.log(person);


