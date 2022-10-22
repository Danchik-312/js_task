const verification = () => {
    let number = parseFloat(prompt("Введите число"));
    if(number > 0){
        alert("плюс");
        verification();
    } else if (number > 0 && number !== 0){
        alert("минус");
        verification();
    }

}

verification();