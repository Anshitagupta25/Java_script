const accountId = 144553
let accountEmail = "anshita.google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
  let accountState;

// accountId = 2     //not allowed
accountEmail = "ag@ag.com"
accountPassword ="121322"
accountCity = "Bangalore"
console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 
/*
PREFER not to use var because of issue in block scope and functional scope.
*/  