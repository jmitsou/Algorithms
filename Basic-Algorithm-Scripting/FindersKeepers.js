//9:Finders Keepers
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
    return undefined;
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));