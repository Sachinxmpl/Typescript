//*Example 1 
// we want create a function that takes any type of array and returns the first element of that array

function getFirstElement(n : any[] ) : any {
    return n[0]
}
const numbers = [1,2,3,4,5]
const firstNum = getFirstElement(numbers)

const strings=["sachn" ,"shyam" , "hari"]
const firstString = getFirstElement(strings)

//Notice that the function works perfect for both arrays of strings and number , but the problem is that it returns any type of data 



//* Example2 
function getSecondElement(n : (number|string)[] ){
    return n[0]
}
const sampleNumbers = [1,2,3,4,5]
const secondNumber = getSecondElement(sampleNumbers)

const sampleStrings=["sachn" ,"shyam" , "hari"]
const secondString = getSecondElement(sampleStrings)

//In this example the return type is number or string but the problem is that it returns any type of data , it's not specific 


//*Generic type 
function getLastElement<T>(data : T[]){
    return data[data.length - 1]
}
const sampleNumbers2 = [1,2,3,4,5]
const sampleStrings2=["sachn" ,"shyam" , "hari"]
const lastNumber = getLastElement(sampleNumbers)
const lastString = getLastElement<string>(sampleStrings)



//*Example 3
type ApiResponse<T> = {
    data : T , 
    isError : false 
}

const response:ApiResponse<{name : string , age : number}> = {
    data : {
        name : "sachin" ,
        age : 20
    } , 
    isError : false
}


//*Example 4
type ResponseSchema <Data extends [name : string , age: number]> ={
    data : Data ,
    isError : false
}

const sampleresponse : ResponseSchema<[name : string , age : number]> ={
    data : ["sachin" , 20 ] ,
    isError : false
}