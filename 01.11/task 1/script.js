const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

const showMessageHTML = () => alert('HyperText Markup Language');
const showMessageCSS = () => alert('Cascading Style Sheets');
const showMessageJS = () => alert('JavaScript');


img1.addEventListener('click',showMessageHTML);
img2.addEventListener('dblclick',showMessageCSS);
img3.addEventListener('contextmenu',showMessageJS);