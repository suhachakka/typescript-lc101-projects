let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;

// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }

// Define your Spacecraft class here:
class SpaceCraft{
    name:string;
    milesPerKilometer : number=0.621;
    speedMph :number;
    constructor(name:string,speedMph:number){
        this.name =name;
        this.speedMph= speedMph;

    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
          let hours: number = milesAway / this.speedMph;
         return hours / 24;
    }
}
let spaceShuttle = new SpaceCraft('Determination', 17500);
console.log(`${spaceShuttle.name} would take  ${spaceShuttle.getDaysToLocation(kilometersToMars)}  days to get to mars`);
console.log(`${spaceShuttle.name} would take  ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)}  days to get to moon`);

// Create an instance of the class here:


// Print two outputs - one for the trip to Mars and one for the trip to the moon.

