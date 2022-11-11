const notificationCont = document.querySelector('#notification-modals');
const btnPrimary = document.querySelector('#btn1');
const btnSecondary = document.querySelector('#btn2');
const btnSuccess = document.querySelector('#btn3');
const btnDanger = document.querySelector('#btn4');

const showNotification = (option) => {
    notificationCont.innerHTML = `<div class="alert ${option.class}">${option.text}</div>`;
    notificationCont.classList.add('notification-modals');
}
btnPrimary.addEventListener('click', () => {
    showNotification({
        text: 'hello',
        class: 'alert-primary'
    })
});

btnSecondary.addEventListener('click', () => {
    showNotification({
        text: 'hello',
        class: 'alert-secondary'
    })
});

btnSuccess.addEventListener('click', () => {
    showNotification({
        text: 'hello',
        class: 'alert-success'
    })
});

btnDanger.addEventListener('click', () => {
    showNotification({
        text: 'hello',
        class: 'alert-danger'
    })
});

notificationCont.addEventListener('click', () => {
    if (event.target === notificationCont){
        notificationCont.className= "";
        document.querySelector('.alert').remove();
    }
})