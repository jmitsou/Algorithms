//3:Factorialize a Number
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {

    for (var i = 1; num > 0 ; num--) {
         i *= num ;
    }
    return i;
}
console.log(factorialize(5))