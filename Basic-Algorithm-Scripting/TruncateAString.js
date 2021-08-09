//8:Truncate a String
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
      return str;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));