const numbeer = document.querySelector('.number');
const btnGenerate = document.querySelector('.generate');

const generetaNumber = () => {
    const random = Math.floor((Math.random() * 100 + 1));
    numbeer.innerHTML = random;
}

btnGenerate.addEventListener('click', generetaNumber);

//generetaNumber();