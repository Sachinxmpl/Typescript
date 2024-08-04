//! Type assertion 

// const btn = document.getElementById("click")    //here btn can be an html lelement or null 

// const btn = document.getElementById("click")!
// const btn = <HTMLButtonElement>document.getElementById("click")
const btn = document.getElementById("click") as HTMLButtonElement
  
btn.onclick = ()=>{
    console.log("clicked")
}

const img = document.querySelector("#myimg") as HTMLImageElement
img.src = "https://picsum.photos/200"

const form = document.querySelector(".form") as HTMLFormElement
const input = document.querySelector(" form input") as HTMLInputElement
form.onsubmit=(e)=>{
    e.preventDefault()
    const p = document.createElement("p")

    p.innerText = input.value
    document.body.appendChild(p)    
}



//*
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



//! Keyof operator 
type schema = {
    // name : string , 
    // email : string , 
    [key : string ] : string 
}

const shamsher : schema = {
    name : "shamsher",
    email : "shamsher@gmail.com"
}


//?shows no error 
// const key = "name"
// console.log(shamsher[key])

//?shows error as key can be anything 
// let key = "name"
// console.log(shamsher[key])

//? to solve this error we use keyof operator 
let key = "name"
console.log(shamsher[key as keyof schema])
console.log(shamsher[key as keyof typeof shamsher ])