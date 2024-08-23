// abstract classes are used to create a blueprint for other classes to inherit from
// we cannot create an object from the abstract class


abstract class TakePhoto {
    constructor(
        public cameramode : string  ,
        public filter : string 
    ){}

    abstract getSepia() : void 
}

class Instagram extends TakePhoto{
    constructor(
        public cameramode : string  ,
        public filter : string , 
        public burst : number 
    ) {
        super(cameramode, filter)
    }

    getSepia(): void {
        console.log("this is a sepia ")
    }
}


const reels = new Instagram("reels", "filter", 10)
// console.log(reels)


export {}