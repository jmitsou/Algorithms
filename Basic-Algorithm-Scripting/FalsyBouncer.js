//13:Falsy Bouncer
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
 function bouncer(arr) {
    let truthArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) truthArray.push(arr[i]);
  }
  return truthArray
}
bouncer([7, "ate", "", false, 9])