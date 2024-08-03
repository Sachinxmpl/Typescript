"use strict";
//!sample example of function with objects 
//*A fuction that takes input an object and prints the elemments of the object 
// interface PersonSchema {
//     name : string , 
//     age : number , 
//     address : string  , 
//     readonly id : number 
// }
// type printObject = (person : PersonSchema) => void
// const getData:printObject = (person) =>{
//     person.name ="ChangedPerson"
//     // person.id = 2  cannot change id as it is a readonly 
//     console.log(person)
// }
// const person1:PersonSchema = {
//     name : "sachin"  ,
//     age : 20 , 
//     address : "laalitpur",
//     id : 1 
// }
// getData(person1)
//*never type 
// const samplefunction = (message : string):never =>{
//     throw new Error(`The error message is ${message}`)
// }
// samplefunction(" testing the typescript types")
