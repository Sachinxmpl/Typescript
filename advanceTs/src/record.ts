// type t_user={
//     id : string , 
//     name : string 
// }

// type Users = {
//     [key : string] : t_user
// }



// const users : Users = {
//     "dssfsadf" : {
//         id : "dssfsadf" , 
//         name : "sachin"
//     } , 
//     "asdffsadf" : {
//         id : "asdffsadf" , 
//         name : "shamsher"
//     }
// }

//? the above code can be replaced as 
type t_user={
    id : string , 
    name : string 
}
type Users = Record<string , t_user>

const users : Users = {
    "dssfsadf" : {
        id : "dssfsadf" , 
        name : "sachin"
    } , 
    "asdffsadf" : {
        id : "asdffsadf" , 
        name : "shamsher"
    }
}