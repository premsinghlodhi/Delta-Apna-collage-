const course ={
    id:4565555,
    subject:"web dev",
    courseinstructor:"hitesh"
}
console.log(course.courseinstructor);//hitesh;normally

const {courseinstructor}=course//destructing
console.log(courseinstructor);// hitesh; 


const {courseinstructor: instuctor}=course
console.log(instuctor);//hitesh


