const myFunc = () => {
    while(true) {
        let a = parseFloat(prompt("Введите свой год рождения: "));
        let b = parseFloat(prompt("Введите нынешний год: "));
        alert(`Вам ${b - a} лет`);
    }
}

myFunc();