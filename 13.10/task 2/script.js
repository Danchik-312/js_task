let num = [20, 30, 150, 70, 530, 140, 215, 133, 124, 124];
let result = 0;

for (let i = 0; i < num.length; i++){
    result += num[i] * num[i];
}
console.log(result);