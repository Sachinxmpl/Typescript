//It is not neseccary to specify userId as number typescript is smartknow 
const userId = 32432 
userId.toString()



//!Any keyword 
let hero  ; 
function getHero(){
    return false
}
hero = getHero()  //here hero is any as getHero can return string or bool or number ...

//* In such case it is better to specify string
let hero2:string  ; 
function getHero2() : string{
    return "stringoly"
}
hero2 = getHero2()   //gethero2 must return string otherwise it's an error
