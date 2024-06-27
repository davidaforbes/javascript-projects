function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeLine(size, character = '#'){
    let line = ''
    for (let i = 0; i < size; i++)
        line += character
    return line
}

function makeSquare(size){
    return makeRectangle(size,size)
}

function makeRectangle(width, height, char) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width, char) + '\n');
    }
    return rectangle;
  }
 
 
function makeDownwardStair(height, char){
    let staircase = ''
    for (let i = 0; i < height; i++){
        staircase += (makeLine(i+1, char) + '\n');
    }
    return staircase.slice(0, -1);
}

function makeSpaceLine(numSpaces,numChars, char){
    let spaceLine = ''
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' '
    }
        spaceLine += (makeLine(numChars, char))
    
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' '
    }
    return spaceLine
}

function makeIsoscelesTriangle(height, char){
    let triangle = ''
    for (let i = 0; i < height; i++){
        triangle += (makeSpaceLine(height-1-i, 2*i+1, char) + '\n')
    }
    return triangle.slice (0, -1)
}


function makeDiamond(height, char){
    let diamond = ''
    diamond += (makeIsoscelesTriangle(height, char) + '\n')
    diamond += reverse(makeIsoscelesTriangle(height, char))
    return diamond
}
