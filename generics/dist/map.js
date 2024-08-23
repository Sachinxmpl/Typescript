"use strict";
var _a, _b, _c;
const myMap = new Map();
myMap.set("banana", 1233);
// console.log(myMap)
// console.log(myMap.has("grape"))
// console.log(myMap.size)
const myMap2 = new Map();
myMap2.set("apple", new Map());
(_a = myMap2.get("apple")) === null || _a === void 0 ? void 0 : _a.set("red delicious", 5);
(_b = myMap2.get("apple")) === null || _b === void 0 ? void 0 : _b.set("granny smith", 3);
console.log((_c = myMap2.get("apple")) === null || _c === void 0 ? void 0 : _c.get("red delicious"));
