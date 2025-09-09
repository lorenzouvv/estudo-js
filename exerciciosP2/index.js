function verificar(){
    var ano = document.querySelector("input#ano")
    var anoNascimento = parseInt(ano.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento
    
    var sexMas = document.querySelector("input#mas").checked
    var sexFem = document.querySelector("input#fem").checked
    var res = document.querySelector("div#res")

    if (sexMas) {
        res.innerHTML = (`<p>Você é homem com ${idade}anos`)
    } else res.innerHTML = (`<p>Você é mulher com ${idade}anos</p>`)
}