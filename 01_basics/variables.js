const accountId = 144553
let accountEmail = "himanshu@google.com"
var accountPassword = "54321"
accountCity = "Patna"

// const accountId = 26443 const are not allowed to be edited

accountEmail = "bhahdkb@google.com"
accountPassword = "12345"  
accountCity = "4522"
let accountState;


/*
Prefer to not use var 
because of issue of block scope and functional scope
*/
// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
