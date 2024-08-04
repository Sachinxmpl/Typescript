"use strict";
//! Type assertion 
// const btn = document.getElementById("click")    //here btn can be an html lelement or null 
// const btn = document.getElementById("click")!
// const btn = <HTMLButtonElement>document.getElementById("click")
const btn = document.getElementById("click");
btn.onclick = () => {
    console.log("clicked");
};
const img = document.querySelector("#myimg");
img.src = "https://picsum.photos/200";
const form = document.querySelector(".form");
const input = document.querySelector(" form input");
form.onsubmit = (e) => {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = input.value;
    document.body.appendChild(p);
};
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
//?shows no error 
// const key = "name"
// console.log(shamsher[key])
//?shows error as key can be anything 
// let key = "name"
// console.log(shamsher[key])
//? to solve this error we use keyof operator 
let key = "name";
console.log(shamsher[key]);
console.log(shamsher[key]);
