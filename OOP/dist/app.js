"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email,
            this.name = name;
    }
}
const sachin = new User("sachinsfasdf@gmail.cin", "sachin");
// sachin.city  //? here we can access all email , name and city 
// console.log(sachin)


//! Using private and public in classes in typescript 
// on defult all the varaibles are public 


// class Sunil {
//     constructor(email, userId) {
//         this.getUsrId = (code) => {
//             if (code == 7) {
//                 return this.userId.toString();
//             }
//             return "aditys";
//         };
//         this.email = email,
//             this.userId = userId;
//     }
// }



const kid = new Sunil("sunil@gmail.com", 34534);
console.log(kid);
const result = kid.getUsrId(7);
console.log(result);
//? I cannto access userId directlty without any function 
