const container = document.querySelector('#notification-container');
const btnPrimary = document.querySelector('#btn-primary');
const btnSuccess = document.querySelector('#btn-success');
const btnDanger = document.querySelector('#btn-danger');

const showNotification = (option) => {
    const notification = `<div class="alert ${option.class}" role="alert"><p>${option.text}</p><button class="close">&#10006;</button></div>`;
    container.innerHTML = notification;
    container.classList.add('notification__container');

}

btnPrimary.addEventListener('click', () => {
    showNotification({
        class: 'alert-primary',
        text: 'Вы успешно зарегистрировались'
    })
});

btnSuccess.addEventListener('click', () => {
    showNotification({
        class: 'alert-success',
        text: 'Вы успешно оформили заказа'
    })
});

btnDanger.addEventListener('click', () => {
    showNotification({
        class: 'alert-danger',
        text: 'Ошибка сервера. Статус ошибки: 500'
    })
});
container.addEventListener('click', (obj) => {
    if(obj.target === container || obj.target === document.querySelector('.close')){
        container.className = '';
        container.innerHTML = '';
    }
})
