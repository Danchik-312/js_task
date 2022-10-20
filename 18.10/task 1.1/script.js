const myFunc = (name, num) => {
    let solution = [];
    for (let i = 0; i < num; i++){
        solution.push(num[i] = name);
    }

    return solution;
}

let result =  myFunc("b", 10);
console.log(result);