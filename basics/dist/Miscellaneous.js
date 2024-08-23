"use strict";
// Typescript never type is use when you are sure that something is never going to occur . For example you write a function which will not return to is endpoint or akways throws an exception
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
const person = {
    name: "sachin",
    age: "23"
};
const getData = (key) => {
    return person[key];
};
console.log(getData("name"));
const shamsher = {
    name: "shamsher",
    email: "shamsher@gmail.com"
};
//shows no error 
// const key = "name"
// console.log(shamsher[key])
//shows error as key can be anything 
// let key = "name"
// console.log(shamsher[key])
//? to solve this error we use keyof operator 
let key = "name";
console.log(shamsher[key]);
console.log(shamsher[key]);
