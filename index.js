function horario() {
    const horaAtual = new Date().toLocaleTimeString();
    console.log("Horário: " + horaAtual);
    return horaAtual;
}

let intervaloRelogio;

function atualizarHorario() {
    document.getElementById("horarioAtual").textContent = `Horário: ${new Date().toLocaleTimeString()}`;
    
    // Atualiza a cada segundo (1000ms)
    intervaloRelogio = setInterval(() => {
        document.getElementById("horarioAtual").textContent = `Horário: ${new Date().toLocaleTimeString()}`;
    }, 1000);
}


function bomX() {
    let hora = new Date().getHours();
    let mensagem;
    
    if (hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    console.log(mensagem);
    return mensagem;
}

function diaDaSemana() {
    let semana = new Date().getDay();
    let dia;

    switch (semana) {
        case 0: dia = "Domingo"; break;
        case 1: dia = "Segunda-feira"; break;
        case 2: dia = "Terça-feira"; break;
        case 3: dia = "Quarta-feira"; break;
        case 4: dia = "Quinta-feira"; break;
        case 5: dia = "Sexta-feira"; break;
        case 6: dia = "Sábado"; break;
    }

    console.log("Hoje é " + dia);
    return dia;
}

function saudacao() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();

    if (!name) {
        alert("Por favor, digite seu nome.");
        nameInput.focus();
        return;
    }

    // Atualiza a UI
    document.getElementById("mensagemSaudacao").textContent = `Olá, ${name}!`;
    document.getElementById("horarioSaudacao").textContent = `Agora são: ${horario()}`;
    document.getElementById("saudacaoTemporal").textContent = `${bomX()}`;
    document.getElementById("diaSemana").textContent = `Hoje é: ${diaDaSemana()}`;
    d

    // Mostra o container
    const saudacaoContainer = document.getElementById("saudacaoContainer");
    saudacaoContainer.classList.remove("hidden");
    saudacaoContainer.classList.add("fade-in");

    // Limpa e foca no input
    nameInput.value = "";
    nameInput.focus();
}
window.addEventListener('load', atualizarHorario);