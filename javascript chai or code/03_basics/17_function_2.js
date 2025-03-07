function calculate_price(num1) {
  return num1;
}
console.log(calculate_price(200));//[ 200 ]



///////////////////////////////////////////


function calculate_price(...num1) {
  return num1;
}
console.log(calculate_price(200, 400, 500));//[ 200, 400, 500 ]


/////////////////////////////////////////////////////


const insta = {
  username: "Itz.pr3m",
  password: "hhio122",
};

function insta_f(anyobject) {
  return anyobject;
}
console.log(insta_f(insta.username));//Itz.pr3m


///////////////////////////////////////




const aray=[2,3,4,5,67,57]
function array_f(anyarray){
    return anyarray
}
console.log(array_f(aray))//[ 2, 3, 4, 5, 67, 57 ]
console.log(array_f(aray[3]));//5
console.log(array_f([1,2,4,567,9]))//[ 1, 2, 4, 567, 9 ]

