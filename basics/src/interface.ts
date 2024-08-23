//we can also define a function prototype 
interface User {
    email : string , 
    readonly userId : number 
    trail : () => string  
    getCoupon : (code : number , name : string) => string
}

//we can also add interface User again
//!reopening of interface 
interface User {
    githubId : number 
}

const sachin :User = {
    githubId : 234 , 
    email : "kckjdlfsadf" , 
    userId : 1 , 
    trail : ()=>{
        return  "console.log"
    } , 
    getCoupon : (iscode , name ) => {
        return name + iscode.toString()
    }
}


interface Smalluser extends User  {
    smalluser : boolean 
}

const person3 : Smalluser = {
    smalluser : false , 
    email : "email" , 
    githubId : 234 , 
    userId : 1 , 
    trail : ()=>{
        return  "console.log"
    } , 
    getCoupon : (iscode , name ) => {
        return name + iscode.toString()
    }
}

console.log(person3.trail())

// console.log(sachin.trail())

export {}



//!some advantage of interface in typescirpt 
//* We can extend interface  (inheritanve similar to classes)
//* Reopening of interface is possible  ,, type cannot be changed after creating 
//* defining function prototypes  , other types in a single interface is possible