//4:Find the Longest Word in a String
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
    var len = [];
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++){
      len.push(words[i].length);
    }
    var strLength = 0;
    for (var i = 0; i < len.length; i++) {
        if (len[i] > strLength){
            var strLength = len[i]
        }
    }
    return strLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));