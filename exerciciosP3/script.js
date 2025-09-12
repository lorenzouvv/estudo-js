function contar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Dados a serem preenchidos!")
    } else{
        // alert("Tudo OK!")
        res.innerHTML = `Contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            res.innerHTML = `Erro... Considerando PASSO = 1`
            p = 1
        }

        if(i < f){
          for(var c = i; c <= f; c += p){
            res.innerHTML += (`${c} \u{27A1}`)
        }  
        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F6A9}`
        
    }
}




