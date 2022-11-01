let intervalTime = 4000;
let indexTime = 0;

const myFunc = () => {
    console.log(`Hello after ${indexTime += 4} seconds`);
    intervalTime += 4000;
}

setTimeout(myFunc,intervalTime);

