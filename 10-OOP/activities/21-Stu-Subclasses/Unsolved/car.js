const Vehicle = require("./vehicle");

class Car extends Vehicle {

    constructor(id, numWheels, sound, color, passenger) {
        super(id, numWheels, sound)
        this.color = color;
        this.passenger = passenger;
    }
    checkPassengers() {
        if (this.passenger > 4) {
            console.log('too many passengers');
        }
    }

    useHorn() {
        console.log(this.sound);
    }
}


const bugatti = new Car(1,4,"vroom","neon green",5);
console.log(bugatti);
bugatti.useHorn();
bugatti.checkPassengers();





