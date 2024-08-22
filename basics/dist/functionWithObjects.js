"use strict";
//!sample example of function with objects 
const getPerson = (person) => {
    return Object.assign(Object.assign({}, person), { modified: true });
};
const person1 = {
    name: "sachin",
    email: "sachinxmpl6",
    id: 3
};
const ans1 = getPerson(person1);
const person2 = {
    name: "shamsher",
    email: "adfas",
    id: 2,
    specail: true
};
const ans2 = getPerson(person2);
console.log(ans1);
console.log(ans2);
