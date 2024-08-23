//!Type Assertions


// const btn = document.getElementById("click") as HTMLButtonElement
// const btn = document.getElementById("click")! 
const btn = <HTMLButtonElement> document.getElementById("click")


const img = <HTMLImageElement> document.getElementById("myimg")
img.src="#"


const form = document.querySelector("form") !
const myInput = document.querySelector(" form > input") as HTMLInputElement

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    const value = myInput.value

    const h2 = document.createElement("h2")
    h2.textContent = `${eval(value + 20)}`
    document.querySelector("body")?.appendChild(h2)
})