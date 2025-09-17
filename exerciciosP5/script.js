let vetor = [];
let selVet = document.querySelector("select#selVet");
let res = document.querySelector("div#res");

function adicionar(){
    let numInput = document.querySelector("input#txtnum")
    let num = Number(numInput.value)
    if(num < 1 || num > 100 || isNaN(num) || num == 0 ){
        res.style.color = 'red'
        res.innerHTML = `Selecione um número válido entre 1 a 100.`
        return;
    } 
    if(vetor.includes(num)){
        res.style.color = 'red'
        res.innerHTML = `O número ${num} já foi adicionado.`
    } else {
        vetor.push(num)
        let item = document.createElement('option')
        item.style.color = 'green'
        item.text = `Valor ${num} adicionado.`
        selVet.appendChild(item)
        res.innerHTML = '';
    }
}

function finalizar(){
    if(vetor.length == 0){
        res.innerHTML = `Nenhum valor foi adicionado.`
    }
    let numeroTotal = vetor.length
    let maiorValor = Math.max(...vetor)
    let menorValor = Math.min(...vetor)
    let soma = vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = soma/numeroTotal
    res.innerHTML = `
        Ao todo temos <strong>${numeroTotal}</strong> números cadastrados. </br>
        O maior valor encontrado foi <strong>${maiorValor}</strong> </br>
        O menor valor encontrado foi <strong>${menorValor}</strong> </br>
        A soma de todos os valores do array foi <strong>${soma}</strong> </br>
        A média da soma dos valores do array foi <strong>${media}</strong> </br>
    `
    }