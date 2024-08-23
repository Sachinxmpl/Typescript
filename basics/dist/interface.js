"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getArray = (person) => {
    return Object.assign({}, person);
};
const person1 = {
    name: "sachin",
    age: 2342
};
console.log(getArray(person1));
