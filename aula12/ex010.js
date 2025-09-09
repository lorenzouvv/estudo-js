var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`);

if (hora < 12){
    console.log("Está de manhã!")
} else if (hora < 18) {
    console.log("Está de tarde!")
} else console.log("Está de noite!")

var diaSem = new Date()
var dia = diaSem.getDay()
switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    default:
        console.log("Sabado")
        break;
}