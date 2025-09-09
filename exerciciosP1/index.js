        var agora = new Date()
        var hora = agora.getHours()
        var res = document.querySelector("div#txt")
        var image = document.querySelector("div#img")
        var fundo = document.querySelector("body")
        if(hora < 12){
            fundo.style.backgroundColor = '#fad764'
            res.innerHTML = (`Bom dia, agora são ${hora}horas.`)
            image.innerHTML = '<img src="manha.jpg" alt="Boa dia">'
        } else if (hora < 18) {
            fundo.style.backgroundColor = '#ff7733'
            res.innerHTML = (`Boa tarde, agora são ${hora}horas.`)
            image.innerHTML = '<img src="tarde.jpg" alt="Boa tarde">'
        } else { 
        fundo.style.backgroundColor = '#0b1636'
        res.innerHTML = (`Boa noite, agora são ${hora}horas.`) 
        image.innerHTML = '<img src="noite.jpg" alt="Boa noite">'
        }