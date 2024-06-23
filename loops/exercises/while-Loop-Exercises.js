//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuel
let crewNum
let shuttleAlt
 


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');
startFuel = input.question('Please enter the initial fuel level...')
startFuel = Number(startFuel)
while (startFuel <= 5000 || startFuel >= 30000){
  startFuel = input.question('Invalid input. Value must be between 5k and 30k...')
  startFuel = Number(startFuel)
}
console.log ('Initial fuel level is marked as '+ startFuel)



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
crewNum = input.question ('Please enter the number of crew members...')
crewNum = Number(crewNum)
while (crewNum > 7 || crewNum < 0){
  crewNum = input.question('WARNING: Maximum occupancy is 7 crew members. Please enter a valid value...')
  crewNum = Number(crewNum)
}
  console.log(`Crew count is ${crewNum}.`)
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
shuttleAlt = 0
console.log(' LAUNCH in 3... 2... 1... PUNCH IT')
while (startFuel > 100*crewNum){
  startFuel = startFuel - 100 * crewNum
  shuttleAlt = shuttleAlt + 50
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAlt} km.`)
if (shuttleAlt >= 2000){
  console.log('Orbit achieved!')
} else {
  console.log('Failed to reach orbit. Oops.')
}