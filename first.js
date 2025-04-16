console.log('Hello World');
fullName = 'Aasutosh Rajopadhyaya';
age = 23;
price = 777777;
x = null; // Special Value which doesn't have any value
y = undefined; // Doesn't have meaning, don't know the value

/* 
Naming Convention:
a. Case Sensitive
b. Only numbers, digits, underscore and dollar sign is allowed. 
c. Only a letter, underscore, or dollar sign is allowed as a first characte.
d. Reserved words cannot be variable names.
*/

/*
When declaring a variable -- USE KEYWORD --> reserved word
LET, CONST, and VAR
var -  can be re-declared and updated. a global scope variable
let - cannot be re-declared but can be u[dated. a block scope variable
const - cannot be re-declared or updated. a block scope variable.
*/

const PI = 3.141567; // Capital letter
var fullName = "Aasutosh Rajopadhyaya";
let age = 24;
let price = 777777;

// Var should never be used. Old way of declaring variable. Never be used. 
// After es6 -> let, const. Saves memory/ Avoid Confusion by declaring variable again and again

let name; // can be declared this way --> value undefined
const G = 9.8; // value must be declared


// Object --> Collection data type
const student = {
    fullName: "Aasutosh Rajopadhyaya",
    age: 23,
    cgpa: 2.8,
    isPass: true
}
// key: Value
// Can be accessed using two ways: obj.key & obj["key"] 

student['age'] = student['age'] + 1;
// can be updated --> object ko key lai change garna mildaina but value lai garna milcha :)

//Pratice - 
