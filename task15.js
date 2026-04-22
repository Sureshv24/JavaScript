for(let s of students){
   
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