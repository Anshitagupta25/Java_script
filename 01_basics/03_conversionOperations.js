//  let score = 27
//  let score = "27abc"
 let score = null
console.log(typeof score);         //will print "number"
console.log(typeof(score));      //will also print "number"
let valueInNumber = Number(score)      //Number ek datatype ki trha use kia h over here
console.log(typeof valueInNumber)   //will print "number"
console.log(valueInNumber)  //will print 27 which is the value on the score variable
// now if we will take score as "23abc" as score lets see what it will print.
// after executng it says its NaN which means not a number because it is not able to convert the string into number as it has some characters in it. so it will print NaN. and the type of NaN is also number. so it will print number as well.
//NaN ka type b number h


// now lets take the value of score as NULL.
// when we will execute it, it will print 0 because null is considered as 0 when we will convert it into number. and the type of 0 is also number so it will print number as well. so it will print number and 0.

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)  //Boolean is also a datatype like number and string. it is used to convert any value into boolean value. it will return true if the value is truthy and false if the value is falsy.
console.log(booleanIsLoggedIn)  //will print true because 1 is a truthy value.
console.log(typeof booleanIsLoggedIn)  //will print boolean because the type of booleanIsLoggedIn is boolean.


let n = 123
let stringNumber = String(n)
console.log(stringNumber)
console.log(typeof stringNumber)
