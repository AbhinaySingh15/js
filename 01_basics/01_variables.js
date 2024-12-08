const accountId = 12345
let accountEmail = "abhinay@gmail.com"
var accountpassword ="23456"
accountCity = "Bhopal"
let accountState;
/*
never ever use var
because of issue in use of block scope and functional scope
*/

accountEmail = "ah@gmail.com"
accountPassword = "212121"
accountCity = "Satna"

console.log("accountId");

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])