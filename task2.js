// Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];


//  Task 1: Print All Students
for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}


//  Task 2: Pass / Fail
for(let s of students){
    let result = s.mark >= 50 ? "Pass" : "Fail";
    console.log(s.name + " - " + result);
}


//  Task 3: Grade System
for(let s of students){
    let grade;

    if(s.mark >= 90){
        grade = "A Grade";
    }
    else if(s.mark >= 75){
        grade = "B Grade";
    }
    else if(s.mark >= 50){
        grade = "C Grade";
    }
    else{
        grade = "Fail";
    }

    console.log(s.name + " - " + grade);
}


//  Task 4: Topper Student
let topper = students[0];

for(let s of students){
    if(s.mark > topper.mark){
        topper = s;
    }
}

console.log("Topper is " + topper.name + " - " + topper.mark);


//  Task 5: Course Search (React)
let courseStudent = students.find(s => s.course === "React");

if(courseStudent){
    console.log("Student found:", courseStudent);
}
else{
    console.log("No student found with this course");
}


//  Task 6: Add New Student
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

console.log("All Students After Adding New One:");
for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}


//  Task 7: Attendance System
let status = "present";

switch(status){
    case "present":
        console.log("Welcome");
        break;

    case "absent":
        console.log("Mark Absent");
        break;

    case "leave":
        console.log("Approved Leave");
        break;

    default:
        console.log("Invalid Status");
}


//  Task 8: Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
}
else{
    console.log("Invalid User");
}