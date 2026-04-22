console.log("21/04/2026 Tasks");


let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];

for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
    if(s.id == 2){
        break;   
    }
}