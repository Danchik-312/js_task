var user = {
    name: "Админ",
    password: "Черный Властелин"
};
let userPassword;
let userName = prompt("Кто пришёл?");

if (userName == null){
    alert("Вход отменен");
} else if (userName === user.name){
    userPassword = prompt("Пароль?");

    if (userPassword == null){
        alert('Вход отменен');
    } else if (userPassword === user.password){
        alert("Добро пожаловать!");
    } else {
        alert("Пароль неверен");
    }
} else{
    alert('Я Вас не знаю');
}