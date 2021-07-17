//Upvotes vs Downvotes
//https://edabit.com/challenge/654ABGmNS5GqscE8C

/* function getVoteCount(votes) {
    
  total = votes.upvotes - votes.downvotes

  return total

}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
//getVoteCount({ upvotes: 2, downvotes: 33 })
//getVoteCount({ upvotes: 132, downvotes: 132 }) */

// 50-30-20 Strategy
// https://edabit.com/challenge/MQL7KSftPQzrxdJw6

/* function fiftyThirtyTwenty(ati) {

  n = ati * .5
  w = ati * .3
  s =  ati * .2

  console.log({Needs:n, Wants: w, Savings:s});
	
}

fiftyThirtyTwenty(10000) 
fiftyThirtyTwenty(50000) 
fiftyThirtyTwenty(13450)  */

// Profile Lookup
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

// Setup
/* var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]; */
/* function lookUpProfile(name, prop) {
  // Only change code below this line

  for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName == name) {
          if (contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop]
          } else {
              return "No such property" 
          }
      }
  }
  return "No such contact"
  // Only change code above this line
}
lookUpProfile("james", "likes"); */

// Sum of People's Budget
// https://edabit.com/challenge/tmnCStcrkdWbreKP5
 
 /* function getBudgets(arr) {
  sum = 0
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].budget != undefined ) {
     sum += arr[i].budget
    }
    
  }
	console.log(sum);
}

getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) 
   
  getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]) */
    
// Make a Circle with OOP
// https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

  /* function Circle(radius){
      this.getArea = function(){
        return Math.PI*(radius**2)
      }
      this.getcircumference = function(){
        return 2*Math.PI*radius
       }
  }
  let round = new Circle(11)
  console.log(round.getArea()); */

// Converting Objects to Arrays
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

/* function toArray(obj) {
	const arr = Object.keys(obj);
    console.log(arr);
}

toArray({ a: 1, b: 2 })
toArray({ shrimp: 15, tots: 12 })
toArray({}) */

// Wherefore Art Thou
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

/* function whatIsInAName(collection, source) {
    let arr = Object.keys(source);
  // Only change code below this line
  // .filter - creates a new array that has only the elements that pass the paramaters of the filter 
  return collection.filter(function(obj) {
    for (var i = 0; i < arr.length; i++) {
      if (
        !obj.hasOwnProperty(arr[i]) ||
        obj[arr[i]] !== source[arr[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
); */