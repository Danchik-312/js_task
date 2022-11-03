function myFunc (array) {
    let solution = '';
    for (let i = 0; i < arguments.length; i++){
        solution += arguments[i];
    }

    return solution;
}

let result = myFunc('Кирилл', 'Данил', "Дима");
console.log(result);