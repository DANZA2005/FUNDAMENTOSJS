const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightball = () => {
    const random = Math.floor(Math.random() * 4);
    const question = prompt('Pregunta a la caracola magica: ')
    const options = [
        'si', 'no', 'tal vez', 'algun dia tus pecados te van a alcanzar y dios no sera tan misericordioso ',
    ]
    h1.innerText = options[random];

}

main.addEventListener('click', eightball);