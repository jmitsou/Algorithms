//6:Confirm the Ending
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
    
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));