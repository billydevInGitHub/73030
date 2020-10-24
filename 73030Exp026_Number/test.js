//new Number(value); 
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
console.log(a instanceof Number); // is true
console.log(b instanceof Number); // is false
console.log(a===123);  //false
console.log(b===123);   //true
console.log(a==123);   //true