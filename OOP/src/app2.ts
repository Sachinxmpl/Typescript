//! getters and setters
//! private is accessible only inside the class and hence cannot be inehrited
//*() protected is accessible only inside the class and its child class

class User {
    private count: number = 0;
    private secretCode: number = 0;
    protected childToken: number = 777;
    constructor(private name: string, private age: number) {
      (this.name = name), (this.age = age);
    }
  
    private deletetoken() {
      console.log("token deleted");
    }
  
    get getCount(): number {
      return this.count;
    }
  
    set setCount(secretCode: number) {
      this.secretCode = secretCode;
    }
  }
  
  const sachin = new User("sachin", 30);
  
  // New class extending User
  class ChildUser extends User {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method to access the protected childToken
    getChildToken(): number {
      return this.childToken;
    }
  }
  
  const childUser = new ChildUser("John", 25);
  console.log(childUser.getChildToken()); // This will output 777
  
  export {};