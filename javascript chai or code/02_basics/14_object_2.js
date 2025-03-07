//// object singleton

const td = new Object();// singleston object
//
 const tinderuser = {};//non singleton object
 console.log(tinderuser); // {}
 tinderuser.id = "1214abb";
 tinderuser.name = "sammy";
 tinderuser.islogin = false;
 console.log(tinderuser); //{ id: '1214abb', name: 'sammy', islogin: false }
 console.log(Object.keys(tinderuser));//[ 'id', 'name', 'islogin' ]
 console.log(Object.values(tinderuser));//[ '1214abb', 'sammy', false ]
 console.log(Object.entries(tinderuser));//[ [ 'id', '1214abb' ], [ 'name', 'sammy' ], [ 'islogin', false ] ]
 console.log(tinderuser.hasOwnProperty("name"));//true


 


const insta = {
  email: "prem @gmail.com  ",
  fullname: {
    userfullname: {
      firstname: "prem",
      secondname: "singh",
      lastname: "lodhi",
    },
  },
};
console.log(insta.fullname.userfullname.lastname); //lodhi



const object1 = { a: "b", b: "4" };
const object2 = { c: "d", d: "6" };
const object3 = { e: "c", f: "42" };

console.log(object1, object2, object3);

const object4 = Object.assign({}, object1, object2, object3); //{ a: 'b', b: '4' } { a: 'd', b: '6' } { a: 'c', b: '42' }
console.log(object4); //{ a: 'b', b: '4', c: 'd', d: '6', e: 'c', f: '42' }

const object5 = { ...object1, ...object2, ...object3 };
console.log(object5); //{ a: 'b', b: '4', c: 'd', d: '6', e: 'c', f: '42' }






users = [
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
  { userID: 1255, username: "pbror12" },
];
console.log(users[4]);





