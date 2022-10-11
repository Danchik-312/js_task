var user = {
    name: "Админ",
    password: "Черный Властелин"
};
let userPassword;
let userName = prompt("Кто пришёл?");

if (userName !== user.name){
    alert("Я Вас не знаю!")
} else if (userName === user.name){
    userPassword = prompt("Пароль?");
} else {
    alert("Вход отменен!"); //Не работает
}

if (userPassword !== user.password){
    alert("Пароль неверен!");
} else if (userPassword === user.password){
    alert("Добро пожаловать!");
} else{
    alert("Вход отменен!"); //Не работает
}

//При отмене первой операции - выходит отказ второй