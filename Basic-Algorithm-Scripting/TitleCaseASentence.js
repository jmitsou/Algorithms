//11:Title Case a Sentence
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence


 function titleCase(str) {
    var makeAnArr = str.toLowerCase().split(" ");
    var result = makeAnArr.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
} 
titleCase("I'm a little tea pot");