// Typescript never type is use when you are sure that something is never going to occur . For example you write a function which will not return to is endpoint or akways throws an exception

function throwError(errorMsg: string): never { 
            throw new Error(errorMsg); 
} 


function keepProcessing(): never { 
            while (true) { 
         console.log('I always does something and never ends.')
     }
}










//sepcial syntax
//*index signature
interface User{
    [key:string] : string ,  
 }
 
 const person : User={
     name:"sachin",
     age:"23" 
 }
 
 const getData = (key : keyof User):string|number =>{
     return person[key]
 }
 
 console.log(getData("name"))
 
 
 
 // Keyof operator 
 type schema = {
     // name : string , 
     // email : string , 
     [key : string ] : string 
 }
 
 const shamsher : schema = {
     name : "shamsher",
     email : "shamsher@gmail.com"
 }
 
 
 //shows no error 
 // const key = "name"
 // console.log(shamsher[key])
 
 //shows error as key can be anything 
 // let key = "name"
 // console.log(shamsher[key])
 
 //? to solve this error we use keyof operator 
 let key = "name"
 console.log(shamsher[key as keyof schema])
 console.log(shamsher[key as keyof typeof shamsher ])



export {}