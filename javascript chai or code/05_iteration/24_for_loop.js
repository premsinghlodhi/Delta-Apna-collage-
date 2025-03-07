// FOR LOOP

// for (let index = 0; index <=10; index++) {
//     const element = index;
//     console.log(element);
// }

///// table 1 to 10 

// for (let i = 1; i < 10; i++) {
//     console.log("outer loop",i);
    
//    for (let j = 1; j < 10; j++) {
//     // console.log(`Innner loop value ${j} inner loop ${i}`);
//     console.log(i + "*"+ j+ "="+ i*j);
    
    
//    }
// }



let MyArray=["prem" , "ravi" , "bhupendra" , "pradeep"]
console.log(MyArray.length)

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    console.log(element);
    
    
}

// break and continue

for (let i = 0; i < 10; i++) {

    if (i===5){
        console.log("detected : ",i);
        //break;
        continue
        
    }
    console.log(i);

    
}