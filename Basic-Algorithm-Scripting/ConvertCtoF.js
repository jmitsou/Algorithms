//1:Convert Celsius to Fahrenheit
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32; //variable takes value and times it by 9 divided by 5 and then adds 32.
    return fahrenheit;
}
convertToF(30)