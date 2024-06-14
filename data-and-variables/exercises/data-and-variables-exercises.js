// Declare and assign the variables below
let spaceShuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let DistanceMarsKm = 225000000;
let DistanceMoonKm = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(spaceShuttleName + ' is a ' + typeof spaceShuttleName);
console.log(shuttleSpeedMph + ' is a ' + typeof shuttleSpeedMph);
console.log(DistanceMarsKm + ' is a ' + typeof DistanceMarsKm);
console.log(DistanceMoonKm + ' is a ' + typeof DistanceMoonKm);
console.log(milesPerKm + ' is a ' + typeof milesPerKm);
// Calculate a space mission below
let milesToMars = DistanceMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = DistanceMoonKm * milesPerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log (spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon.")