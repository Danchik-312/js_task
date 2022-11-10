const alertPrimary = document.querySelector("#btn1");
const alertSecondary = document.querySelector("#btn2");
const alertSuccess = document.querySelector("#btn3");
const alertDanger = document.querySelector("#btn4");

const showNotification = (option) => {
    const notification = document.querySelector('.modals');
    notification.outerHTML = `<div class='notification ${option.name}'>${option.text}</div>`;

    setTimeout(() => notification.remove(), 1500);
}

alertPrimary.addEventListener('click', () => {
    showNotification({
        name: 'alert-primary',
        text: 'Hello'
    })
});

alertSecondary.addEventListener('click', () => {
    showNotification({
        name: 'alert-secondary',
        text: 'Hello'
    })
});

alertSuccess.addEventListener('click', () => {
    showNotification({
        name: 'alert-success',
        text: 'Hello'
    })
});

alertDanger.addEventListener('click', () => {
    showNotification({
        name: 'alert-danger',
        text: 'Hello'
    })
});