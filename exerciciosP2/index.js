function verificar(){
    var ano = document.querySelector("input#ano")
    var anoNascimento = parseInt(ano.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento
    
    var sexMas = document.querySelector("input#mas").checked
    var sexFem = document.querySelector("input#fem").checked
    var res = document.querySelector("div#res")
    var img = document.querySelector("div#img")

    if (isNaN(anoNascimento)){
        res.innerHTML = (`<p style='color: red;'>Selecione o ano!</p>`)
        return
    } else if (anoNascimento > anoAtual) {
        res.innerHTML = (`<p style='color: red;'>Selecione um ano antes de ${anoAtual}!</p>`)
        return
    }

    if (!sexFem && !sexMas) {
        res.innerHTML = (`<p style='color: red;'>Escolha um sexo!</p>`)
        return
    }

    if(idade > 120){
        res.innerHTML = (`<p style='color: red;'>Calma lá, você não é vampiro!</p>`)
        return
    }

    if (sexMas && idade < 12) {
        res.innerHTML = (`<p>Você é criança com ${idade} anos`)
        img.innerHTML = (`<img src="crianca.png" alt="kid">`)
    } else if (sexMas && idade < 18) {
        res.innerHTML = (`<p>Você é jovem com ${idade} anos`)
        img.innerHTML = (`<img src="jovem.webp" alt="young">`)
    } else if (sexMas && idade < 60) {
        res.innerHTML = (`<p>Você é adulto com ${idade} anos`)
        img.innerHTML = (`<img src="adulto.png" alt="adult">`)
    } else if (sexMas && idade < 120){
        res.innerHTML = (`<p>Você é idoso com ${idade} anos`)
        img.innerHTML = (`<img src="idoso.png" alt="older">`)
    } else if (sexFem && idade < 12) {
        res.innerHTML = (`<p>Você é criança com ${idade} anos`)
        img.innerHTML = (`<img src="garota.png" alt="kid">`)
    } else if (sexFem && idade < 18) {
        res.innerHTML = (`<p>Você é jovem com ${idade} anos`)
        img.innerHTML = (`<img src="jovemF.jpg" alt="young">`)
    } else if (sexFem && idade < 60) {
        res.innerHTML = (`<p>Você é adulta com ${idade} anos`)
        img.innerHTML = (`<img src="adulta.png" alt="adult">`)
    } else {
        res.innerHTML = (`<p>Você é idosa com ${idade} anos`)
        img.innerHTML = (`<img src="idosa.jpg" alt="older">`)
    }
}