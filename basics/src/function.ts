// const func = (n:number , m : number , add : boolean = false) : number =>{
//     if(add) return n+m
//     return n*m ;
// }
// console.log(func(2,3))
// console.log(func(4,3,true))

//*using type aliases
type add = (a: number, b: number, l?: number) => void;
const add: add = (x, y, l) => {
  if (typeof l === "undefined") {
    l = 0;
  }
  console.log(x + y + l);
};
add(2, 3);

//!Rest opreator
// const addNumbers = (...m:Array<number|string>):void=>{
//     console.log(m)
// }

// addNumbers(1,2,3,4,5,3,4,"sachin","is","a","good","boy")
