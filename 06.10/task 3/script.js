let time = 50;

if (time >= 0 && time <= 15) {
    alert("первая четвреть");
} else if (time > 15 && time <= 30) {
    alert("вторая четвреть");
} else if (time > 30 && time <= 45) {
    alert("третья четвреть");
} else if (time > 45 && time <= 59) {
    alert("четвертая четвреть");
} else{
    alert("Значение не попадает в диапазон от 0 до 59")
}