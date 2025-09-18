function converter(){
    let inputTemp = document.querySelector("input#txtTemp")
    let selectTemp = document.querySelector("select#temp")
    let tipoTemp = selectTemp.value
    let temp = Number(inputTemp.value)
    let res = document.querySelector("div#res")
    let fundo = document.body
    let f
    let k

    if(tipoTemp == 'Selecione'){
        res.innerHTML = `Por favor, selecione um tipo de temperatura.`
    } 
    if(tipoTemp == 'Celsius'){
        f = (temp * 1.8) + 32
        k = (temp + 273.15)
        if(temp < 20){
           fundo.style.backgroundImage = "url('frio.jpg')"; 
        } else if (temp < 28) {
           fundo.style.backgroundImage = "url('moderado.jpg')"; 
        } else{
           fundo.style.backgroundImage = "url('quente.jpg')"; 
        }
        
        res.innerHTML = `
        Fahrenheit = ${f.toFixed(1)}
        <br>
        Kelvin = ${k.toFixed(1)}
        `
    } else if(tipoTemp == 'Fahrenheit'){
        if(temp < 66){
           fundo.style.backgroundImage = "url('frio.jpg')"; 
        } else if (temp < 84) {
           fundo.style.backgroundImage = "url('moderado.jpg')"; 
        } else{
           fundo.style.backgroundImage = "url('quente.jpg')"; 
        }
        temp = (temp - 32) * 5/9
        k = (temp + 273.15)
        

        res.innerHTML = `
        Celsius = ${temp.toFixed(1)}
        <br>
        Kelvin = ${k.toFixed(1)}
        `
    } else if(tipoTemp == 'Kelvin'){
        if(temp < 292){
           fundo.style.backgroundImage = "url('frio.jpg')"; 
        } else if (temp < 302) {
           fundo.style.backgroundImage = "url('moderado.jpg')"; 
        } else{
           fundo.style.backgroundImage = "url('quente.jpg')"; 
        }
        
        f = (temp * 1.8) - 459.67
        temp = temp - 273.15

        res.innerHTML = `
        Celsius = ${temp.toFixed(1)}
        <br>
        Fahrenheit = ${f.toFixed(1)}
        `
    }
}
