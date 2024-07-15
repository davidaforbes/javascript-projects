const RPS = require('../RPS.js');


describe("testing RPS", function(){

   test("Same input from both users should result in a tie.", function(){
      let output = RPS('paper','paper');
      expect(output).toEqual("TIE!");
   });
   test("If player 1 inputs rock and player 2 inputs paper, player 2 wins", function(){
      let output = RPS('rock','paper');
      expect(output).toEqual('Player 2 wins!');  
   });
   test("If player 1 inputs paper and player 2 inputs scissors, player 2 wins", function(){
    let output = RPS('paper','scissors');
    expect(output).toEqual("Player 2 wins!");
 });
   test("If player 1 inputs scissors and player 2 inputs rock, player 2 wins", function(){
    let output = RPS('scissors','rock');
    expect(output).toEqual("Player 2 wins!");
   });
   test("If player 1 inputs rock and player 2 inputs scissors, player 1 wins.", function(){
    let output = RPS('rock','scissors');
    expect(output).toEqual("Player 1 wins!");
 });
   test("If player 1 inputs paper and player 2 inputs rock, player 1 wins.", function(){
    let output = RPS('paper','rock');
    expect(output).toEqual("Player 1 wins!");
 });
   test("If player 1 inputs scissors and player 2 inputs paper, player 1 wins.", function(){
    let output = RPS('scissors','paper');
    expect(output).toEqual("Player 1 wins!");
 });
   test("If either player input does not match rock, paper, or scissors, game is canceled.", function(){
    let output = RPS('xylophone','puppet');
    expect(output).toEqual("Incorrect input, no winner.");
 });
});