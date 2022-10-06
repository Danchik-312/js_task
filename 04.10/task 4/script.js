let user_position = 'FrontEnd Junior';
let user_salary = 300;
let result = user_position === "FrontEnd Junior" && user_salary === 300; //true && true
console.log(result); //true

let city = "Moskow";
let country =  "Kyrgyzstan";
let result2 = city === 'Bishkek' && country === "Kyrgyzstan"; // true && false
console.log(result2); // false

let user_name = 'Danil';
let user_age = 17;
let result3 = user_name === "Данил" && user_age === 17; //false && true
console.log(result3); //false

let result4 = user_name === "Андрей" && user_position === "BackEnd Junior"; //false && false
console.log(result4); //false