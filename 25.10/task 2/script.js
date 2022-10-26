const myFunc = () =>{
    let number = parseFloat(prompt("Введите число:"));
    let solution = 0;

    while (number !== 99){
        solution++;
        number = parseFloat(prompt("Введите число:"));
    }

    alert(solution);
}

myFunc();
