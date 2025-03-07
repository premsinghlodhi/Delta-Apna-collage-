let div2 = document.querySelector(".div2");
let button = document.createElement("button");
button.id='btn'
        button.innerHTML = "click me!!";
        div2.appendChild(button);

let input=document.createElement('input')     
input.type='text'
input.placeholder=' Enter  username '
input.id='input1'

div2.appendChild(input)
let btn =document.querySelector('#btn')
btn.style.color='red'
btn.style.backgroundColor='pink'

let h1=document.getElementsByTagName('h1')
h1[0].innerHTML='Hello Ankur!!!'
h1[0].style.backgroundColor='pink'
h1[0].style.textTransform='uppercase'
let para=document.createElement('p')
para.innerHTML=`apna collage <b> Delta</b> Batch`
div2.appendChild(para)