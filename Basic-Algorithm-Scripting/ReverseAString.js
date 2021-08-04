//2:Reverse a String
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {

    return str
        .split('') // .split takes the string and breaks it up into an array ["s","t","r","i","n","g"]
        .reverse() // .reverse takes the array and reverses the order of the elements 
        .join(''); // .join takes the array and puts it up into a string  ["string"]
}
reverseString("hello");