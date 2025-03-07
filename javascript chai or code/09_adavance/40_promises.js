const promiseone = new Promise(function (reslove, reject) {
  //do an async task
  // DB calls cryptography ,network
  setTimeout(() => {
    console.log("Async task is completed");
    reslove();
  }, 1000);
});
promiseone.then(function () {
  console.log("promise is consumed");
});





new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("aync2 is compleeted");
    reslove();
  }, 1000);
}).then(function () {
  console.log("async 2is consumed");
});


const promisethree= new Promise(function(reslove,reject){
   setTimeout(function(){
    reslove({username:"premsingh",email:'prem@gmail.com'})
   },1000)
})
promisethree.then(function(user){
    console.log(user)
})



const promisefour= new Promise(function(reslove,reject){
   setTimeout(function(){
    let error=false;
    if(!error){
        reslove({username:"premsingh",email:'prem@gmail.com'})
    }else{
        reject('ERROR, somethingwent wrong')
    }
   },1000)
})
promisefour.then(function(user){
    console.log(user)
    return(user.username)
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally the error is either resolved or rejected");
    
})





