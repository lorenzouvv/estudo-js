function verificar(){
    var ano = document.querySelector("input#ano")
    var anoNascimento = parseInt(ano.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento
    var res = document.querySelector("div#res")

    if(isNaN(anoNascimento) || anoNascimento > anoAtual){
        window.alert('[ERRO] Dados Incorretos relacionado ao ano!')
    } else {
        var sexo = document.getElementsByName("sexo")
        var gen = ''
        var img = document.createElement("img")
        img.setAttribute('id','foto')
        if (sexo[0].checked){
            gen = 'Homem'
            if(idade < 12 && idade >= 0){
                //criança
                img.setAttribute('src','crianca.png')
            }
            else if (idade < 18){
                //jovem
                img.setAttribute('src','jovemM.png')
            }
            else if (idade < 60){
                //adulto
                img.setAttribute('src','adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (sexo[1].checked){
            gen = 'Mulher'
            if(idade < 12 && idade >= 0){
                //criança
                img.setAttribute('src','garota.png')
            }
            else if (idade < 18){
                //jovem
                img.setAttribute('src','jovemF.jpg')
            }
            else if (idade < 60){
                //idosa
                img.setAttribute('src','adulta.png')
            }
            else{
                //idosa
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a)${gen} com ${idade} anos!`
        res.appendChild(img)
    }
}
