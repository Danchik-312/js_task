function getDoubling (numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        array.push(numbers[i] * 2);
    }

    return array;
}

let result = getDoubling([2,2,2,2,2,2]);
console.log(result);
