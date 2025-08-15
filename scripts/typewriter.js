const texto = "Bem-vindo ao Estudo-Js.";
const elemento = document.getElementById("titulo");
let i = 0;
let isDeleting = false;

function digitar() {
    const velocidadeNormal = 100;
    const velocidadeApagar = 50;
    const esperaFim = 2000;

    if (!isDeleting && i <= texto.length) {
        elemento.textContent = texto.substring (0 ,i);
        i++;
        setTimeout(digitar, i === texto.length ? esperaFim : velocidadeNormal);

        if (i > texto.length) {
            isDeleting = true;
            i = texto.length;
        }
    }
    else if (isDeleting && i >= 0) {
        elemento.textContent = texto.substring(0, i);
        i--;
        setTimeout(digitar, velocidadeApagar);
        if (i < 0){
            isDeleting = false;
            i = 0;
        }
    }
}

digitar();