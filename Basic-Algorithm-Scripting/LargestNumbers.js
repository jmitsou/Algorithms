//5:Return Largest Numbers in Arrays
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
function largestOfFour(arr) {
var secArr = [];
for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i][0];
    for (var a = 0; a < arr[i].length; a++) {
        if (arr[i][a] > tempArr){
            tempArr = arr[i][a];
        }
    }
    secArr[i] = tempArr;
}
return secArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))