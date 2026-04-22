let count = 0;

for(let s of students){
    let result = s.mark >= 50 ? "Pass" : "Fail";
    console.log(s.name + " - " + result);

    count++;
    if(count == 2){
        break;   
    }
}