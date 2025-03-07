const user = {
  username: "prem ",
  price: 2555,
  welcomemessage: function () {
    // console.log(`${username}, welcome to our website `);
    console.log(`${this.username}, welcome to our website `); // this is help in acess the current context

    //console.log(this);// show all content of the node
  },
};

user.welcomemessage(); //prem , welcome to our website
user.username = "ankur";
user.welcomemessage(); //ankur, welcome to our website

console.log(this); //{}

function chai() {
  let username = "jeuk";
  console.log(username);
  // console.log(this.username);// cannot used this in function to acess username
}
chai();





const chai1 = Function();
{
  let username = "jeuk";
  console.log(this.username);
}


const chai2 = () => {
  let username = "jeuk";
  console.log(username);
  console.log(this.username);
};

chai1();
chai2();







const addtwo = (num1 ,num2) => {
    return num1+num2
}
console.log(addtwo(2,3));//5

const add2 = (num1 ,num2) => (num1 +num2)
console.log(add2(2,4));//6
