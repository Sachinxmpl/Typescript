"use strict";
// const a = 3444 
// alert(a)
//*Defining type 
// let a :number = 25 ; 
// let name11:string ="sachin"; 
// let check: boolean = true ; 
// let sachin  = <string>"hi"
//! UNION TYPE 
//* Surname can be either string or number 
// let surname : string|number ; 
// surname = 12 
//*This function takes two number as arguments and return  a number , cannot return a String 
// const func = (n:number , m:number ):number =>{
//             console.log(n+m)
//             return (n+m)
// }
// let a = func(12,13)
// console.log(typeof(a))
// console.log(a)
//!Type Aliases 
//*Using type keyword  with normal varaibles/object
// type username = number | boolean ; 
// let a:username = true ;     //a can be a number or boolean 
// type Carname = String ; 
// type Carnumber = number 
// type CarGood = boolean 
// type Details = {
//     name : Carname
//     number : Carnumber
//     good : CarGood
// }
// const varCarname : Carname = "BMW"
// const varCarnumber : Carnumber  = 2056
// const varCargood : CarGood = false 
// const varDetails : Details = {
//     name : varCarname ,
//     number : varCarnumber ,
//     good : varCargood
// }
// console.log(varDetails)
//*Using type with function 
// type functionSchema = (x : number , y : string) => string 
// const testFunction : functionSchema = (x,y) =>{
//     return String(x) + y
// }
// console.log(testFunction(12,"sachin"))
