function gerarTabuada(){
    var numero = document.querySelector("input#txtnum")
    var tabuada = document.querySelector("select#selTab")

    if(numero.value.length == null || numero.value.length <= 0){
        alert("Insira um número válido!")
    } else{
        var n = Number(numero.value)
        for(var c = 1; c <= 10 ; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}