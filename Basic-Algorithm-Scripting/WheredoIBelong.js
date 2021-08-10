//14:Where do I Belong
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
 function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
    return arr.length;
  }
  getIndexToIns([40, 60], 50)