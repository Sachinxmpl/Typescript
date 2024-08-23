//* Getters is a methdo that used to access or retreive the value of private or protected property
//Provides a way to add custom logic when getting the value of a property.

//* Setter is a method that  is used to update or modify the value of a private or protected property.

interface PersonSchema {
  firstname: string;
  lastname: string;
  age: number;
}

class Person implements PersonSchema {

    protected token: string = ""

  constructor(
    public firstname: string,
    public lastname: string,
    public age: number
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get fullname() : string {
    return `${this.firstname} and ${this.lastname}`;
  }

  set settoken(token : string) {
    this.token = token 
  }

  get gettoken() : string{
    return this.token
  }

}
const person1 = new Person("sachin", "kumar", 30);
console.log(person1.fullname);

person1.settoken = "thisissecrettoken"
console.log(person1.gettoken)




export {};
