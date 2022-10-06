let user_name = "Данил";
let user_age = 17;
let user_auto = "Mercedes-Benz E63s W212";
let user_position = "FrontEnd Junior";
let user_salary = 300;

let result = user_salary === 300 || user_position === "FrontEnd Junior"; // true || true
console.log(result); //true

let result3 = user_age === 17 || user_name === "Danil"; //true || false
console.log(result3); // true

let result2 = user_age === "300" || user_name === "Данил"; //false || true
console.log(result2); //true

let result4 = user_auto === "Mercedes-Benz Е63s 212" || user_position === "BackEnd Junior"; //false || false
console.log(result4); //false
