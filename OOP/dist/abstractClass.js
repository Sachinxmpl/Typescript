"use strict";
// abstract classes are used to create a blueprint for other classes to inherit from
// we cannot create an object from the abstract class
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("this is a sepia ");
    }
}
const reels = new Instagram("reels", "filter", 10);
