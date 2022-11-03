const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');

const showMessageYT = () => alert(`Вы хотите перейти на сайт YouTube?`);
const showMessageTh = () => alert("Вы хотите перейти на сайт Twitch?");
const showMessageMC = () => alert("Вы хотите перейти на сайт Megacom?");

link1.addEventListener('mouseenter',showMessageYT);
link2.addEventListener('mouseenter',showMessageTh);
link3.addEventListener('mouseenter',showMessageMC);