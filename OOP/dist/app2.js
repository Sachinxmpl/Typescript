"use strict";
//! getters and setters
//! private is accessible only inside the class and hence cannot be inehrited
//*() protected is accessible only inside the class and its child class
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.count = 0;
        this.secretCode = 0;
        this.childToken = 777;
        (this.name = name), (this.age = age);
    }
    deletetoken() {
        console.log("token deleted");
    }
    get getCount() {
        return this.count;
    }
    set setCount(secretCode) {
        this.secretCode = secretCode;
    }
}
const sachin = new User("sachin", 30);
// New class extending User
class ChildUser extends User {
    constructor(name, age) {
        super(name, age);
    }
    // Method to access the protected childToken
    getChildToken() {
        return this.childToken;
    }
}
const childUser = new ChildUser("John", 25);
console.log(childUser.getChildToken()); // This will output 777
