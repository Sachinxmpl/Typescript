"use strict";
//* Getters is a methdo that used to access or retreive the value of private or protected property
//Provides a way to add custom logic when getting the value of a property.
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.token = "";
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname() {
        return `${this.firstname} and ${this.lastname}`;
    }
    set settoken(token) {
        this.token = token;
    }
    get gettoken() {
        return this.token;
    }
}
const person1 = new Person("sachin", "kumar", 30);
console.log(person1.fullname);
person1.settoken = "thisissecrettoken";
console.log(person1.gettoken);
