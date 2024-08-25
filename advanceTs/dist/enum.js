"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["right"] = 2] = "right"; //2
})(Direction || (Direction = {}));
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
function dosomething(keypressed) {
    ///dosomething
    if (keypressed == Direction.up) {
        console.log("up presesd");
    }
    else if (keypressed == Direction.down) {
        console.log("down pressed");
    }
    else if (keypressed == Direction.right) {
        console.log("right pressed ");
    }
}
dosomething(Direction.up);
console.log(Direction.up); // prints 0 
