
let fruta = document.getElementById("Fruta");
let resultado = document.getElementById("resultado")

function Apertar(){

    switch(fruta.value){
        case "banana":
            resultado.innerHTML = "Você escolheu banana"
            console.log("você escolheu banana")
            break;
        case "maçã":
            resultado.innerHTML = "Você escolheu maçã"
            console.log("você escolheu maçã")
            break;
        default:
            resultado.innerHTML = "essa fruta não existe no sistema"
            console.log("essa fruta não existe no sistema")
}
}