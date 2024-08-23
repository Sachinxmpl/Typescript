"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sachin = {
    githubId: 234,
    email: "kckjdlfsadf",
    userId: 1,
    trail: () => {
        return "console.log";
    },
    getCoupon: (iscode, name) => {
        return name + iscode.toString();
    }
};
const person3 = {
    smalluser: false,
    email: "email",
    githubId: 234,
    userId: 1,
    trail: () => {
        return "console.log";
    },
    getCoupon: (iscode, name) => {
        return name + iscode.toString();
    }
};
console.log(person3.trail());
//!some advantage of interface in typescirpt 
//* We can extend interface  (inheritanve similar to classes)
//* Reopening of interface is possible  ,, type cannot be changed after creating 
//* defining function prototypes  , other types in a single interface is possible
