const mainBtnCreate = document.querySelector('#main-block-btn-create');

const creatElem = () => {
    const items = document.querySelector('#items');
    const item = document.createElement('li');
    item.classList.add('main__item');
    item.innerText = `Пункт`;
    items.append(item);
}

mainBtnCreate.addEventListener('click', creatElem);