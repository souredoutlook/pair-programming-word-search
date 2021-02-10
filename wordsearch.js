const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        if (l.split("").reverse().join("").includes(word)) return true
    }

    let verticalArray =[]
    
    for (let i = 0; i < letters[0].length; i++) {
        verticalArray.push([]);
        for (let j = 0; j < letters.length; j++) {
            verticalArray[i].push(letters[j][i]); 
        }
    }

    const verticalJoin = verticalArray.map(ls => ls.join(''))

    for (l of verticalJoin) {
      if (l.includes(word)) return true
      if (l.split("").reverse().join("").includes(word)) return true
    }

    //diagonal arrays
    // step 1: first array, frist character
    // step 2: second array, frist character, first array, second character

    // let diagonalArray =[]
    
    // for (let i = 0; i < letters[0].length; i++) {
    //     // diagonalArray.push([]);
    //     // for (let j = 0; j < letters.length; j++) {z
    //         diagonalArray.push(letters[i][i]); 
    
    //     // }
    // }
    // console.log(diagonalArray);

    return false;
}

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'REY');

module.exports = wordSearch

// so you'll want to start by editing the code in wordsearch.js to allow the tests to pass.
// add tests for vertical join
// create vertical join

// For this challenge, you'll be implementing a word search solver, azs a function that receives a 2D array of letters and a word. The function must:

    // Check to find the word horizontzally and vertically
    // Return true if the word is found, and return false if the word is not found

// NOTE: You do not need to check to see if a word is written backwards or diagonally.

// This challenge comes with some initial (buggy!) code. We suggest approaching this problem with a TDD mindset, meaning "write tests, make the tests pass, repeat!".

// There are already some tests in ./test/test_wordsearch.js, and you can run the tests with npm test. You'll find that one of the tests doesn't pass yet,


// When the present tests are successful, ask yourself, "Do the current tests cover all the possible cases?" What if the word is written vertically, not horizontally? What about the case where the word matrix is an empty array? You'll have to write tests for these cases (and any others that you think of), and you might also have to modify the wordSearch function to make those new tests pass.