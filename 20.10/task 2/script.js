const verification = (a, b) => {
   let solution = a > b ? 1 : -1;
   return a === b ? 0 : solution;
}


let result = verification(30,20);
alert(result);
