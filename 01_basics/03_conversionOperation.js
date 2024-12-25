let score ="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NAN is a special type ,you can check whethere system give it or not.

// "33"=> 33
// "33abc" => NAN 
// true => 1, false =>0

let isLoggedIn =1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// conversion me kuch syntax ka dyaan rhakna hai
// 1=> true , 0=> false
//"abhinay" =>true

let someNumber = 15

let stringNumber = String(someNumber)
console.log(stringNumber);
// aab type pata kerte hai
console.log(typeof stringNumber);

//**************Operation*****

let value = 3
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%3);

let str1 = "Abhinay"
let str2 = " Singh"

let str3 = str1 +str2
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log("1" + 2 + 2);
console.log(1+2+"3");

console.log((3+4) *5 % 3);

console.log(+true);
console.log(+"")

let num1 , num2 , num3 

num1=num2=num3= 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// prfix and postfix js mdn and ecma 7.1 type...