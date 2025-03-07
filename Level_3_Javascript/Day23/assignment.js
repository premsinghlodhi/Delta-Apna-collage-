let body = document.querySelector("body");
body.style.background = "black";
let div = document.createElement("div");
div.style.background = "violet";
div.style.border = "1px solid red";

div.style.color = "white";
body.appendChild(div);
let para = document.createElement("p");
para.innerHTML =
  "The HTMLCollection returned by getElementsByTagName() is live. This means that if the DOM is modified after the method is called (for example, elements are added or removed), the HTMLCollection will automatically update to reflect those changes.";

let button = document.createElement("button");
button.innerText = "click Me!!!";
button.style.background = "red";
// div.appendChild(para);
div.append(button, para);

button.addEventListener('click', () => {
  body.style.background = "violet";
  div.style.background = "black";
});

let input=document.createElement('input')
input.placeholder='enter heading'
let div2=document.createElement('div')
div2.style.background='violet'
body.append(div2)
div2.appendChild(input)
let h1=document.querySelector('#h1');
input.addEventListener('input',function(){
   const name = input.value.replace(/[^a-zA-Z ]/g, '');
   h1.innerText=`${name}`
   input.value=name;
}) 

// input.addEventListener("input", function() {
//   // Allow only letters and spaces
//   const name = input.value.replace(/[^a-zA-Z ]/g, '');

//   // Update the heading with the cleaned name
//   h1.textContent = `Your Name: ${name}`;
  
//   // Update the input field value to allow only valid characters
//   input.value = name;
// });