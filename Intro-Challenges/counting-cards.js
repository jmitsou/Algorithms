//Counting Cards:
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

var count = 0;
function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; //add 1
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--; //minus 1
            break;
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
    // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4))