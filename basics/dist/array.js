"use strict";
//? Type script in  array
// const arr:number[] = [1,2,3,4]
// const arr2:string[] = ['a','b','c']
// type arraySchema = number[]|string[]|string
// const arr3:arraySchema=[1,2,3,4]
// const arr4:arraySchema=['1','2','3']
// const arrayDefination:arraySchema = "This is array defination"
//? a different way
const sampleArray = [1, 2, 3, 4];
const sampleArray2 = ["sachin", 1, "hari", 3];
const sampleArray3 = new Array(true, false);
console.log(sampleArray3);
const heros = ["schin", "ironaman", "hi"];
heros.map((hero) => `${hero}+1`); //hero is already detected as string 
const allusers = [];
allusers.push({
    name: "sachin",
    isactive: true
});
//some problems 
const data = ["1", "2", "3"];
const data1 = [1, 2, 3]; //it  can either be all strings or all numbers 
const data3 = ["1", 2, 3, "sachin"];
