class User {
    email : string 
    name : string 
    readonly city : string = ""
    constructor(email : string  , name : string ) {
        this.email = email , 
        this.name = name 
    }
}

const sachin = new User ("sachinsfasdf@gmail.cin" , "sachin")
// sachin.city  //? here we can access all email , name and city 
// console.log(sachin)




//! Using private and public in classes in typescript 
// on dafult all the varaibles are public 


class Sunil {
    public  email : string 
    private userId : number

    constructor(email: string , userId : number){
        this.email = email , 
        this.userId = userId
    }

    public getUsrId = (code : number) : string =>{
        if(code == 7){
            return this.userId.toString()
        }
        return "aditys"
    }
}
const kid = new Sunil ("sunil@gmail.com" , 34534)
console.log(kid)
const result = kid.getUsrId(7)
console.log(result)
//? I cannto access userId directlty without any function 