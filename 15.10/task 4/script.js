function doubling(example) {
    let result = [];
    for (let i = 0; i < example.length; i++) {
        result.push(example[i] * 2);
    }

    return console.log(result);
}

doubling([2,2,2,2,2,2]);
