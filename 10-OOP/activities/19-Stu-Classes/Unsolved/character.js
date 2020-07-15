class Character {
  constructor(name, hp, strength) {
    this.name = name;
    this.hp = hp;
    this.strength = strength;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hp} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return this.hp > 0;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${opponent["name"]} was attacked`);
    opponent["hp"] = opponent["hp"] - this.strength;
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const lux = new Character("lux", 1000, 10);
const garren = new Character("garren", 2000, 10);

// Create an interval that alternates attacks every 2000 milliseconds

const timer = setInterval(attack, 2000);

function attack(){
  lux.attack(garren);
}