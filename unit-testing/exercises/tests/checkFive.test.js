const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("function should return 'is less than 5' for values less than 5", function() {
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("checkFive", function(){
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
   });

   test("checkFive", function(){
    let output = checkFive(9);
    expect(output).toEqual("9 is greater than 5.");
   });
});