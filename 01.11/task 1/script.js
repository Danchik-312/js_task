const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const showMessageHTML = () => alert('HyperText Markup Language');
const showMessageCSS = () => alert('Cascading Style Sheets');
const showMessageJS = () => alert('JavaScript');


btn1.addEventListener('click',showMessageHTML);
btn2.addEventListener('dblclick',showMessageCSS);
btn3.addEventListener('contextmenu',showMessageJS);