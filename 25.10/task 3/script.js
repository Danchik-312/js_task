const myFunc = () =>{
    let number = parseFloat(prompt("Введите число:"));
    let index = 0;
    let sum = 0;

    while (number !== 999){
        index++;
        sum += number;
        number = parseFloat(prompt("Введите число:"));
    }

    alert(`Кол-во чисел - ${index}; сумма = ${sum}`);
}

myFunc();