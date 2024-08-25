interface User {
    name : string , 
    email : string , 
    age : number  , 
    password : string  , 
    profilePictrues : string[]
}

//what is we have to update user from databse and change its name and email only 

//we can pick name , age , email from User 

type UpdateProps = Pick<User , "name"| "age" | "email">

function updateUser(updateProps : UpdateProps){
    // here update particula props only name , age , email 
}
updateUser({
    name : "sacin" , 
    age : 23 ,
    email : "sdfsf"
})




type OptionalUpdateProps = Partial<UpdateProps>
function UpdateOptionslPorps(updateOptionslProps : OptionalUpdateProps){
    //cod e
}

UpdateOptionslPorps({
    name : "sachin"
})