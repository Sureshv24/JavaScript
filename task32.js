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