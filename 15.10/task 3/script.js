let name = ("Василий")

function getName(userName = "гость") {
    let str = `Привет, ${userName}`;
    return console.log(str);
}

getName(name);
