
//!sample example of function with objects 
 

//*A fuction that takes input an object and prints the elemments of the object 

interface PersonSchema {
    name : string , 
    email : string , 
    readonly id : number ,
    specail? : boolean
}

type funcpersonSchema  = (person : PersonSchema) => {name : string , email : string , id : number }


const getPerson : funcpersonSchema = (person) =>{
    return {
        ...person , modified : true 
    }
}


const person1 : PersonSchema = {
    name : "sachin" , 
    email : "sachinxmpl6" , 
    id : 3 
}

const ans1 = getPerson(person1)


const person2: PersonSchema = {
    name : "shamsher" , 
    email : "adfas" , 
    id : 2 , 
    specail : true 
}
const ans2 = getPerson(person2)

console.log(ans1)
console.log(ans2)