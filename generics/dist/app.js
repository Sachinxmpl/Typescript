"use strict";
//*The situation where we dont know the type of data that will be passed to the function
//*one way is use can use any 
// const func = (n : any) : any  =>{
//     return n 
// }
// const ans = func(10)
// const ans1 = func("hi")
// const ans2 = func(true)
//* but use of any doesn't make any sense of using typescirpt 
//! To sol the problem we use generics
// const samplefunction = <CustomType>(n:CustomType) : CustomType =>{
//     let testType :CustomType ; 
//     return n 
// }
// const ans = samplefunction(10)
// const ans1 = samplefunction("hi")   
// const ans2 = samplefunction(true)   
//*Example 
// type Person = {
//     name : string , 
//     age : number 
// }
// const samplefunction = <T>(n:T) : T =>{
//     let testType :T ; 
//     return n 
// }
// const person1:Person = {
//     name : "sachin",
//     age : 20
// }
// // const ans = samplefunction(person1)
// const ans = samplefunction<Person>(person1)
//* Example 2 
// const arr1:number[] = [3,4,5]
// const arr: Array<number> = [1,2,3,4,5]  //using generics 
// //* Using multiple generics 
// const sample = <T,U>(n:T,m:U) : [T,U] =>{
//     return [n,m]
// }
// const ans = sample<string,number>("sachin",10)
//* Example 3
// type studentSchema1 = {
//     name : string , 
//     age : number , 
// }
// type studentSchema2 = {
//     name : string , 
//     age : number , 
//     email : string 
// }
// const student1:studentSchema1 = {
//     name : "sachin",
//     age : 18
// }
// const student2:studentSchema2 = {
//     name :  "Harry" , 
//     age : 19  , 
//     email : "sachinxmpl6@gmail.com"
// }
// const getStudentData = <T , U extends T>(n:T , m:U) : {n:T , m:U} =>{
//     return {
//        n,m
//     }
// }
// const ans = getStudentData(student1,student2)
// console.log(ans)
