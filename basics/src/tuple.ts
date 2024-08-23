//here we can declare the data inside arrya in an random order 
let array : Array <string | number | boolean> = ["sachin" , true , 123]

//tuples are basically intorduced in typescirpt to increaase stricktness



let tarrayt : [number , string , boolean]  = [1, "3243" , true] // this specifies the order of the datas of arrays 

console.log(tarrayt)


//!  why is this  then ?
tarrayt.push("sachin")
tarrayt[0] = 12 
console.log(tarrayt)

//? although we cannot the element type of tuple and it most follow the order then are we allowed to push , pop methods 