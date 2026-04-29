//  Task 1: Student Form Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");


//  Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(10, 5);


//  Task 3: Reusable Greeting
function greet(name) {
    console.log("Hello", name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");


//  Task 4: Return Value
function square(num) {
    return num * num;
}

console.log(square(5)); 


//  Task 5: Scope Check
function checkScope() {
    let secret = "javascript";
    console.log("Inside function:", secret);
}

checkScope();

// console.log(secret); 

/*
Explanation:
'secret' is declared using let inside the function.
So it is available only inside that function block.
Outside the function, it cannot be accessed.
*/


//  Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let merged = [...boys, ...girls];
console.log(merged);


//  Task 7: Unlimited Numbers
function sumAll(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(total);
}

sumAll(10, 20, 30, 40);


//  Task 8: Array Destructuring
let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);


//  Task 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role);


//  Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

let offers = offerGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


//  Task 11: Curry Function
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));


//  Task 12: Student Marks Analyzer
function mark(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let average = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", average);
}

mark(80, 90, 70, 60);


//  Challenge Task: Employee Registration System
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");