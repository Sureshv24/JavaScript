let topper = students[0];

for(let s of students){
    if(s.mark > topper.mark){
        topper = s;
    }
}
console.log("Topper is " + topper.name + " - " + topper.mark);