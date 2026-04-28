function sumAll(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(total);
}

sumAll(10, 20, 30, 40);