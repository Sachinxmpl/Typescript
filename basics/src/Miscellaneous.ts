// Typescript never type is use when you are sure that something is never going to occur . For example you write a function which will not return to is endpoint or akways throws an exception

function throwError(errorMsg: string): never { 
            throw new Error(errorMsg); 
} 


function keepProcessing(): never { 
            while (true) { 
         console.log('I always does something and never ends.')
     }
}




//? Void vs never 
//* 1 void type can have null or undefined as value but never cannot 

let something: void = null;
// let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'


//! void returns undefined wheres never caused compile time error 
function sayHi(): void { 
    console.log('Hi!')
}

let speech: void = sayHi();
console.log(speech); // undefined

//speech is undefined, because the sayHi function internally returns undefined even if return type is void. If you use never type, speech:never will give a compile time error, as void is not assignable to never.


export {}