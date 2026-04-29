//  Task 1: Variable Update
var num = 50;
num = 100;
console.log("Task 1:", num);


//  Task 2: Let Variable Math
let marks = 80;
marks = marks + 10;
console.log("Task 2:", marks);


//  Task 3: Const Value
const price = 500;
let finalPrice = price + 100;
console.log("Task 3:", finalPrice);


//  Task 4: Printing Statements
console.log("Welcome Team");
console.log(2026);
console.log(true);


//  Task 5: Datatype Check

console.log(typeof "JavaScript");
console.log(typeof 250);
console.log(typeof false);


//  Task 6: Array Task
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Full Array:", fruits);
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);


//  Task 7: Object Task
let student = {
    name: "Naveen",
    age: 20,
    course: "MERN"
};
console.log("Name:", student.name);
console.log("Age:", student.age);


//  Task 8: Arithmetic Operators

console.log(20 + 10);
console.log(50 - 25);
console.log(5 * 5);
console.log(100 / 4);
console.log(20 % 3);


//  Task 9: Increment / Decrement
let x = 5;
x++;
console.log("Task 9 - x:", x);

let y = 10;
y--;
console.log("Task 9 - y:", y);


//  Task 10: Comparison Operators

console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);


//  Task 11: Logical Operators

console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));


//  Task 12: Ternary Operator
let age = 18;
let result = (age >= 18) ? "Eligible" : "Not Eligible";
console.log("Task 12:", result);
