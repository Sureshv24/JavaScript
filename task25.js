function checkScope() {
    let secret = "javascript";
    console.log("Inside function:", secret);
}
checkScope();
// console.log("Outside function:", secret);
// This will cause an error because 'secret' is not defined outside the function