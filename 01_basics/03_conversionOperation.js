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