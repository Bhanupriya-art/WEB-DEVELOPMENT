//operators

let x = 10;
let y = 20;
let z = 30;

console.log("x + y:", x + y); // Addition
console.log("x - y:", x - y); // Subtraction    
console.log("x * y:", x * y); // Multiplication
console.log("x / y:", x / y); // Division
console.log("x % y:", x % y); // Modulus
console.log("x ** 2:", x ** 2); // Exponentiation
console.log("x += y:", x += y); // Addition assignment
console.log("x -= y:", x -= y); // Subtraction assignment
console.log("x *= y:", x *= y); // Multiplication assignment
console.log("x /= y:", x /= y); // Division assignment
console.log("x %= y:", x %= y); // Modulus assignment
console.log("x **= 2:", x **= 2); // Exponentiation
console.log("x = y:", x = y); // Assignment
console.log("x == y:", x == y); // Equality
console.log("x != y:", x != y); // Inequality  
console.log("x > y:", x > y); // Greater than
console.log("x < y:", x < y); // Less than
console.log("x >= y:", x >= y); // Greater than or equal to
console.log("x <= y:", x <= y); // Less than or equal to
console.log("x === y:", x === y); // Strict equality
console.log("x !== y:", x !== y); // Strict inequality

//opeartors with strings
let str1 = "Hello";
let str2 = "World";
console.log("str1 + str2:", str1 + " " + str2); //
// Concatenation
console.log("str1.length:", str1.length); // Length of string
console.log("str1.toUpperCase():", str1.toUpperCase()); // Convert to uppercase
console.log("str1.toLowerCase():", str1.toLowerCase()); // Convert to lowercase
console.log("str1.includes('lo'):", str1.includes("lo")); // Check if substring exists
console.log("str1.indexOf('l'):", str1.indexOf
("l")); // Index of substring
console.log("str1.startsWith('He'):", str1.startsWith("He")); // Check if starts with
console.log("str1.endsWith('lo'):", str1.endsWith("lo")); // Check if ends with
console.log("str1.repeat(2):", str1.repeat(2)); // Repeat string    
// Comparison operators with strings
console.log("str1 == str2:", str1 == str2); // Equality
console.log("str1 != str2:", str1 != str2); // Inequality
console.log("str1 > str2:", str1 > str2); // Greater than
console.log("str1 < str2:", str1 < str2); // Less than
console.log("str1 >= str2:", str1 >= str2); // Greater than or equal to
console.log("str1 <= str2:", str1 <= str2); // Less than or equal to
console.log("str1 === str2:", str1 === str2); // Strict equality
console.log("str1 !== str2:", str1 !== str2); // Strict inequality                  
//variable.js
// Variable declaration and scope
var a = 5; // Global variable
let b = 10; // Block-scoped variable
const c = 15; // Block-scoped constant          
console.log("a:", a); // 5
console.log("b:", b); // 10
console.log("c:", c); // 15                 

{
    var a = 8;
    let b = 10;
    var c = 12;
}
console.log(a);
console.log(b);
console.log(c);


//hoisting
console.log(personName);
var personName = "Raj";
console.log(personName);

var d = 45;
function func(){
    console.log(d);
    var d =12;
    console.log(d);
}
func();
// Output: undefined, 12
console.log(d);
