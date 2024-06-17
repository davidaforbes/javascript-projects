// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "green"
let spaceSuitsOn = true
let shuttleCabinReady = true
let crewStatus = spaceSuitsOn && shuttleCabinReady
let computerStatusCode = 200
let shuttleSpeed = 15000
let fuelLevel = 20001
let engineTemperature = 2500
let commandOverride = false
// BEFORE running the code, predict what will be printed to the console by the following statements:
// Engines Status
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
// Crew Status
if (crewStatus === true) {
   console.log("Crew Ready")  
} else {
   console.log ("Crew Not Ready")
}
// Computer Status
if (computerStatusCode === 200) {
   console.log("Please Stand by. Computer is rebooting.")
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online.")
} else {
   console.log("ALERT: Computer offline!")
}
// Shuttle Speed
if (shuttleSpeed > 17500) {
   console.log("ALERT:Escape velocity reached!")
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit")
} else {
   console.log("Stable Speed")
}
// Fuel Monitoring
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT")
} else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good")
} else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.")
} else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.")
} else{
   console.log("Fuel and engine status pending...")
}
// Final Launch Check
if ((fuelLevel > 20000 && engineIndicatorLight != "red blinking") || commandOverride === true){
   console.log("Cleared to Launch")
} else{
   console.log("Launch Scrubbed!")
}