
//! Basic classes 

//*Using the simpel javascript class and constructor functioon 
// class Player {

//     constructor(height:number , weight:number){
//         this.height = height ; 
//         this.weight = weight ; 
//     }
// }

// const abhi = new Player(12,12)

// console.log(abhi)

//*Typescript allows us additional propety of private , public just like c++ does 

// class Animal{
//         private height 
//         public weight 

//         constructor(height:number , weight:number){
//             this.height = height ;
//             this.weight = weight ;
//         }

//         getheight(){
//             return this.height ;
//         }
// }

// const social = new Animal(24,1232)
// console.log(social)
// console.log(social.weight)
// console.log(social.height) //runs but shows error as height is  private 
// console.loog(social.getheight())



//*we can also use protected 

// class Human{
//     public readonly id : string 
//     constructor(private age : number , public weight : number , protected sex : boolean){
//         this.age = age ;
//         this.weight = weight ;
//         this.sex = sex ;
//         this.id = String(Math.random()*1000)
//     }

//     getage(){
//         return this.age ; 
//     }
// }

// const sachin = new Human(23,123,true)
// console.log(sachin.sex)  //Property sex is protected and only accessible within class and its subclasses.

// class Man extends Human{
//     constructor(age : number , weight : number , sex : boolean , public special : boolean ){
//         super(age , weight , sex)
//         this.special=special
//     }
//     getSpecail(){
//         return this.sex ; 
//     }
// }

// const shamsher = new Man(23,123,false,true)
// console.log(shamsher.special)
// console.log(shamsher.getSpecail())
// console.log(shamsher.id)


