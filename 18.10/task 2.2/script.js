const data = (num) => {
    let solution = [];
    for (let i = num.length - 1; i >= 0; i--){
        solution.push(num[i]);
    }

    return solution;
}

let result = data([5,65,123,4]);
console.log(result);