//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate { 
    constructor(name, mass, scores) {
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }
    addScores(newScore) {
            return this.scores.push(newScore);
        };
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i ++) {
            sum += this.scores[i]
        };
       return Math.round((sum / this.scores.length)*10)/10
      };
    status() {
        if (this.average() >= 90) {
            return "Accepted"
        } else if (this.average() >= 80) {
            return "Reserve"
        } else if (this.average() >= 70) {
            return "Probationary"
        } else if (this.average() < 70){
            return "Rejected"
        };
      }
    };

let candidateOne = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
let candidateTwo = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let candidateThree = new CrewCandidate("Glad Gator", 225, [75, 78, 62])
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
candidateOne.addScores(83)
console.log (candidateOne)
console.log (candidateThree.average())
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
//console.log(`${candidateOne.name} earned an average test score of ${candidateOne.average()}% and has a status of ${candidateOne.status()}.`)
let testCount = 0;
while (candidateThree.status() !== "Reserve") {
    candidateThree.addScores(100)
    testCount ++
}
console.log (candidateThree.scores)
console.log (testCount)