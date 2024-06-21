let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let spling = str.split(' ')
console.log(spling)
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let jarr = arr.join(' ')
console.log(jarr)
//3) Do split or join change the original string/array?
console.log(str)
console.log(arr)
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldArr = cargoHold.split(',')
cargoHoldArr.sort()
let cargoHoldABC = cargoHoldArr.join(',')
console.log(cargoHoldABC)