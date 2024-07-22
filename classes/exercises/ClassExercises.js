// Define your Book class here:
class Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkOut(numberOfCheckOuts = 1) {
        this.timesCheckedOut += numberOfCheckOuts
    }
}
// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
           super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    trash(currentYear){
        if (currentYear-this.copyright > 5) {
           this.discarded = 'Yes';
    }
  }
}
class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
         super (title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    trash(){
        if (this.timesCheckedOut > 100) {
            this.discarded = 'yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ('Pride and Prejudice', 'Jane Austen', '1813', '1111111111111', 432, 32, 'no')

let shuttleBuildingManual = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', '2013', '0000000000000', 1147, 1, 'no')

// Code exercises 4 & 5 here:

shuttleBuildingManual.trash(2024)
console.log (prideAndPrejudice.timesCheckedOut)
prideAndPrejudice.checkOut(5)

console.log (shuttleBuildingManual.discarded)

console.log (prideAndPrejudice.timesCheckedOut)

//trash(currentYear){
   // if (currentYear > (this.copyright + 5)) {
  //      this.discarded = 'yes';
 //   }