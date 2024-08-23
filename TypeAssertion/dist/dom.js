"use strict";
//!Type Assertions
// const btn = document.getElementById("click") as HTMLButtonElement
// const btn = document.getElementById("click")! 
const btn = document.getElementById("click");
const img = document.getElementById("myimg");
img.src = "#";
const form = document.querySelector("form");
const myInput = document.querySelector(" form > input");
form.addEventListener("submit", (e) => {
    var _a;
    e.preventDefault();
    const value = myInput.value;
    const h2 = document.createElement("h2");
    h2.textContent = `${eval(value + 20)}`;
    (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(h2);
});
