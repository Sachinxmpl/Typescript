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
//? Void vs never 
//* 1 void type can have null or undefined as value but never cannot 
let something = null;
// let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
//! void returns undefined wheres never caused compile time error 
function sayHi() {
    console.log('Hi!');
}
let speech = sayHi();
console.log(speech); // undefined
