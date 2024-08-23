interface person {
    name : string , 
    age : number 
} 

const getArray  = (person : person )  : {}=>{
    return {...person}
}

const person1 : person  = {
    name : "sachin" , 
    age : 2342
}

console.log(getArray(person1))

export {}