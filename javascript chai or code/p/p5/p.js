// random colop generater
//console.log(Math.floor(Math.random()*16));
const randomcolor=function(){
    const hex ='0123456789ABCDEF'
    let color='#'
    for ( let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)];
    } 
return color;}

let intervalID;
    function background_color(){
        document.querySelector("body").style.backgroundColor=randomcolor();
    }
    const start_color_change=function(){
        intervalID=setInterval(background_color,500)
    }
  const stop_color_change= function(){
    clearInterval(intervalID)
    intervalID=null;
  }
    document.querySelector('#start').addEventListener("click",start_color_change)
    document.querySelector('#stop').addEventListener("click",stop_color_change)


