const verticalTranspose = function(letters) {
  let verticalArray =[]
  for (let i = 0; i < letters[0].length; i++) {
    verticalArray.push([]);
      for (let j = 0; j < letters.length; j++) {
        verticalArray[i].push(letters[j][i]); 
    }
  }
  return verticalArray;
};

const diagonalLRTranspose = function(letters) { //transposes from the top left corner to the bottom right corner
  let i = 0;
  let j = 0;
  const diagonalLR = [];
  do{
    let count = 0;
    let innerArray = [];
    while (count <= j && count < letters[0].length){
      innerArray.push(letters[j - count][i + count])
      count ++;
    }
    j++
    diagonalLR.push(innerArray);
  } while (j < letters.length - 1) //when j is one less than the number of elements in letters do it one more time
  do{
    let count = 0;
    let innerArray = [];
    while (count <= j && count < letters[0].length - i){ //make sure that we are comparing the counter to the maximum width "under the line" (when you visualize it as a 2d array)
      innerArray.push(letters[j - count][i + count])
      count ++;
    }
    i++;
    diagonalLR.push(innerArray);
  } while (i < letters[0].length)
  return diagonalLR;
};



const diagonalRLTranspose = function(letters) { //transposes from the top right corner to the bottom left corner employs same concepts as above
  let x = letters[0].length-1; //8
  let y = 0;     //0
  const diagonalRL = [];
  do{
    let count = 0;
    let innerArray = [];
    while (count <= y && count < letters.length){
      innerArray.push(letters[y - count][x - count])
      count ++;
    }
    y++ //1
    diagonalRL.push(innerArray);
  } while (y < letters.length - 1)
  do{
    let count = 0;
    let innerArray = [];
    while (count <= y && count <= x){
      innerArray.push(letters[y - count][x - count])
      count ++;
    }
    x--;
    diagonalRL.push(innerArray);
  } while (x >= 0)
  return diagonalRL;
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (l of horizontalJoin) {
      if (l.includes(word)) return true
      if (l.split("").reverse().join("").includes(word)) return true
  }

  const verticalJoin = verticalTranspose(letters).map(ls => ls.join(''))

  for (l of verticalJoin) {
    if (l.includes(word)) return true
    if (l.split("").reverse().join("").includes(word)) return true
  }
   
  const diagonalLRJoin = diagonalLRTranspose(letters).map(ls => ls.join(""))

  for (l of diagonalLRJoin) {
    if (l.includes(word)) return true
    if (l.split("").reverse().join("").includes(word)) return true
  }

  const diagonalRLJoin = diagonalRLTranspose(letters).map(ls => ls.join(""))

  for (l of diagonalRLJoin) {
    if (l.includes(word)) return true
    if (l.split("").reverse().join("").includes(word)) return true
  }

  return false;
}

//TEST CODE
// wordSearch([
//   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
//   ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
//   ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
//   ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
//   ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
//   ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
//   ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
//   ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
//   ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'],
// ], 'eca');

module.exports = wordSearch