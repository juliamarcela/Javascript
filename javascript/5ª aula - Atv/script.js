let tempo = document.getElementById("tempo");
let valor = document.getElementById("valor");

function Apertar(){
    if (valor.value >= 3000 && tempo.value >= "5"){
        alert("Deverá pagar impostos")
    }
    else{
        alert("Não deverá pagar impostos")
    }
}