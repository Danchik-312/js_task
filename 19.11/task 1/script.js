const form = document.querySelector('form');
const btn = document.querySelector('.submit');
const formData = {};

form.addEventListener('input', (event) => {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
})
