let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function() {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function() {return Math.round(Math.random()*10)}
};

let beagle = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.round(Math.random()*10)}
};

let tardigrade = {
   name: 'Aldina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.round(Math.random()*10)}
};
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let zooCrew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
// Print out the relevant information about each animal.
let crewReport = function(crewmate){
   return `${crewmate.name} is a ${crewmate.species}. They are ${crewmate.age} years old and ${crewmate.mass} kilograms. Their ID is ${crewmate.astronautID}.`
};
console.log (crewReport(tardigrade));
console.log (crewReport(beagle));

// Start an animal race!
let animalRace = function (racers) {
   let results = [];
   let numSteps;
   let numTurns;
   for (let i = 0; i < racers.length; i++){
      numSteps = 0;
      numTurns = 0;
   for (let j = 0; numSteps < 20; j++){
      numSteps += racers[i].move();
      numTurns = j + 1;
   };
   results.unshift(`${racers[i].name} finished the race in ${numTurns} turns.`);
   };
   return results;
};

console.log (animalRace(zooCrew))