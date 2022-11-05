const notification = document.querySelector('.notification');
const btn1 = document.querySelector('#btn1');

function showNoitification (text = 'hello', className = 'alert-danger'){
   notification.classList.add(className);
   notification.innerText = text;

   setTimeout(() => notification.classList.remove(className), 1500);
}

btn1.addEventListener('click', showNoitification);