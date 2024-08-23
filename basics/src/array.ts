//? Type script in  array
// const arr:number[] = [1,2,3,4]
// const arr2:string[] = ['a','b','c']

// type arraySchema = number[]|string[]|string
// const arr3:arraySchema=[1,2,3,4]
// const arr4:arraySchema=['1','2','3']
// const arrayDefination:arraySchema = "This is array defination"

//? a different way
const sampleArray:Array<number>=[1,2,3,4]
const sampleArray2:Array<number|string>=["sachin",1,"hari",3]

const sampleArray3:Array<boolean>=new Array(true,false)
console.log(sampleArray3)





const heros: Array<string> = ["schin", "ironaman", "hi"];
heros.map((hero) : string=> `${hero}+1`)  //hero is already detected as string 



type User = {
    name : string , 
    isactive : boolean 
}
const allusers : Array<User> = []
allusers.push({
    name : "sachin" , 
    isactive : true 
})




//some problems 
const data : string[] | number[] = ["1" , "2" , "3"]
const data1 : string[] | number[] = [1,2,3]   //it  can either be all strings or all numbers 

const data3 : (string|number)[] = ["1",2,3,"sachin"]