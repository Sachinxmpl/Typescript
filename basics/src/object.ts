//!Normal method 
// const sample1 :{
//     name : string , 
//     age : number , 
//     isMarried : boolean
// } = {
//     name : "sachin", 
//     age : 20 , 
//     isMarried : false
// }
// console.log(sample1)

//*Using type aliases 
// type objectSchema = {
//     name : string , 
//     weight :number , 
//     gender? : boolean   //here gender property is optional 
// }
// const sampleObject:objectSchema = {
//     name : "hari" , 
//     weight : 60 , 
//     gender : false 
// }
// console.log(sampleObject)

// const sampleObject2 :objectSchema = {
//     name : "sachin" , 
//     weight : 18 
// }
// console.log(sampleObject2)


//!Interface keyword in typescript 
//* interface allows us to use the extend property , so we use interface and inside that type 

type functionSchema = (a : number) => void ; 

interface livingThingsSchema{
        age : number , 
        func : functionSchema 
}

interface humanSchema extends livingThingsSchema{
    name : string ,
    gender? : boolean ,
    isMarried?: boolean
}

const sampleHuman : humanSchema = {
    name : "sachin" , 
    age : 10 , 
    func : (a=10)=>{
        console.log(a)
    }
}
// console.log(sampleHuman)
// sampleHuman.func(12)



//! Mixing two or more types but not good practise
type cardNumber = {
    cardnumber : string 
}
type cardDate = {
    cardDate : string 
}
type cardDetails = cardDate & cardNumber & {
    cvv : number ,
    readonly id : number 
}