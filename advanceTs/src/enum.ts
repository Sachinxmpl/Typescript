
enum Direction{
    up , //0
    down , //1
    right //2
}

// enum Direction {
//     up = "one" , 
//     down = "down" , 
//     right = "right"
// }

// enum Direction{
//     up  = 2 ,
//     down , 
//     right 
// }

function dosomething(keypressed : Direction){
    ///dosomething
    if(keypressed == Direction.up){
        console.log("up presesd")
    }
    else if (keypressed == Direction.down){
        console.log("down pressed")
    }
    else if (keypressed == Direction.right){
        console.log("right pressed ")
    }
}

dosomething(Direction.up) 
console.log(Direction.up)// prints 0 