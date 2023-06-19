
let dia = document.getElementById("Dia");
let resultado = document.getElementById("resultado")

function Apertar(){

    switch(dia.value){
        case "1":
            resultado.innerHTML = "Domingo (Final de semana)"
            break;
        case "2":
            resultado.innerHTML = "Segunda-Feira (Dia útil)"
            break;
        case "3":
            resultado.innerHTML = "Terça-Feira (Dia útil)"
            break;
        case "4":
            resultado.innerHTML = "Quarta-Feira (Dia útil)"
            break;
        case "5":
            resultado.innerHTML = "Quinta-Feira (Dia útil)"
            break;
        case "6":
            resultado.innerHTML = "Sexta-Feira (Dia útil)"
            break;
        case "7":
            resultado.innerHTML = "Sábado (Final de semana)"
            break;
        default:
            resultado.innerHTML = "Este dia é inválido"
    }
}