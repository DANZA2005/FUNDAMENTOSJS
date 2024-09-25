const btnplay = document.querySelector('button');
const h3user = document.querySelector('#user span');
const h3compu = document.querySelector('#compu span');
const h1res = document.querySelector('h1')


const play = () => {
    const choiceuser = prompt('Elige: \n piedra\n papel\n tijeras');
    const choices = ['piedra', 'papel', 'tijeras', 'daniel'];

    const choicecompu = choices[Math.floor(Math.random() * 3 )];
    let message = '';
    if(choiceuser === choicecompu){
        message = 'Empataste papu :v';
    }else if (choiceuser === 'piedra' && choicecompu === 'tijeras' || choiceuser === 'papel' && choicecompu === 'piedra'|| choiceuser === 'tijeras' && choicecompu === 'papel' ){
        message = 'Ganaste papuuuu +10000 prro';
    }
    else {
        message = 'perdiste papu noooooo :\'V';
    }
    h3user.innerText = choiceuser;
    h3compu.innerText = choicecompu;
    h1res.innerText = message;
}
btnplay.addEventListener('click', play)

const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            document.body.appendChild(star);
        }