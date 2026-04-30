// Task 1: Array Basics
let arr1 = [10, 20, 30, 40, 50];

console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);
console.log(arr1.length);

// Task 2: Push & Pop
let arr2 = [1,2,3];

arr2.push(4,5);  
arr2.pop();      

console.log(arr2); 

// Task 3: Includes Check
let arr3 = ["html","css","javascript","react"];

console.log(arr3.includes("javascript")); 

// Task 4: Filter Salaries
let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let highSalary = emp1.filter(e => e.salary > 20000);
console.log(highSalary);

// Task 5: Map Names
let names = emp1.map(e => e.name);
console.log(names); 

// Task 6: Reduce Sum
let totalSalary = emp1.reduce((sum, e) => sum + e.salary, 0);
console.log(totalSalary);

// Task 7: Remove Duplicates
let arr4 = [1,2,2,3,4,4,5];

let unique = [...new Set(arr4)];
console.log(unique);

// Task 8: Find Largest Number
let arr5 = [10, 200, 5, 90];

let max = Math.max(...arr5);
console.log(max);

// Task 9: Reverse String WITHOUT reverse()
let str1 = "hello";
let rev = "";

for (let i = str1.length - 1; i >= 0; i--) {
    rev += str1[i];
}

console.log(rev); 

// Task 10: Group by Salary
let emp2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp2.reduce((acc, e) => {
    if (!acc[e.salary]) {
        acc[e.salary] = [];
    }
    acc[e.salary].push(e.name);
    return acc;
}, {});

console.log(grouped);

//  Task 11: Flatten Array (without flat)
let arr6 = [1,[2,[3,[4]]]];

function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flatten(arr6));

// Task 12: Custom Sort (Descending)
let arr7 = [5,2,9,1];
let sortVal = arr7.sort((a,b)=>{
   return b-a
})

console.log(sortVal);

// Task 13: Find Second Largest
let arr8 = [10, 50, 20, 40];

let sorted = [...arr8].sort((a,b) => a - b);
let secondLargest = sorted[2];

console.log(secondLargest);

// Task 14: Count Characters
let str2 = "aabbccdde";

let count = {};

for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (count[char]) {
        count[char] = count[char] + 1;
    } else {
        count[char] = 1;
    }
}

console.log(count);


