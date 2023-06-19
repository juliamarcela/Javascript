
let idade = document.getElementById("idade");
let resultado = document.getElementById("resultado")

function Apertar(){

    switch(idade.value){
        case "5":
            resultado.innerHTML = "infantil"
            break;
        case "6":
            resultado.innerHTML = "infantil"
            break;
        case "7":
            resultado.innerHTML = "infantil"
            break;
        case "8":
            resultado.innerHTML = "infantil"
            break;
        case "9":
            resultado.innerHTML = "infantil"
            break;
        case "10":
            resultado.innerHTML = "infantil"
            break;
        case "11":
            resultado.innerHTML = "juvenil"
            break;
        case "12":
            resultado.innerHTML = "juvenil"
            break;
        case "13":
            resultado.innerHTML = "juvenil"
            break;
        case "14":
            resultado.innerHTML = "juvenil"
            break;
        case "15":
            resultado.innerHTML = "juvenil"
            break;
        case "16":
            resultado.innerHTML = "junior"
            break;
        case "17":
            resultado.innerHTML = "junior"
            break;
        case "18":
            resultado.innerHTML = "junior"
            break;
        case "19":
            resultado.innerHTML = "junior"
            break;
        case "20":
            resultado.innerHTML = "junior"
            break;
        case "21":
            resultado.innerHTML = "profissional"
            break;
        case "22":
            resultado.innerHTML = "profissional"
            break;
        case "23":
            resultado.innerHTML = "profissional"
            break;
        case "24":
            resultado.innerHTML = "profissional"
            break;
        case "25":
            resultado.innerHTML = "profissional"
            break;
            default:
                resultado.innerHTML = "Essa idade é inválida"
    }
}