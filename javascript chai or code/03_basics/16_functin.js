// function
function first_function() {
  console.log("p");
  console.log("r");
  console.log("e");
  console.log("m");
}
console.log(first_function); //[Function: first_function] ; funtion refrence
console.log(first_function()); //prem; function excute





function addtwonumber(num1, num2) {
  return num1 + num2; // function cannot give the value which written after the return
}
console.log(addtwonumber(2, 5)); //7







function logged_In(username) {
  if (username === undefined) {
    console.log("please enter the username");

    return;
  }

  return username;
}
console.log(logged_In()); // please enteer the username
console.log(logged_In("prem")); //prem
