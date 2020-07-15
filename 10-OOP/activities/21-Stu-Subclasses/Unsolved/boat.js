const Vehicle = require("./vehicle");
class Boat extends Vehicle {

    constructor(id, numWheels, sound, crew) {
        super(id, numWheels, sound)
        this.crew = crew;
    }
    crewSoundOff() {
        console.log(this.crew);
    }
    useHorn() {
        console.log(this.sound);
    }
}