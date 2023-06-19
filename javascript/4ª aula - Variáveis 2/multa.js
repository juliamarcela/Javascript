let valorVelocidade = document.getElementById("ValorDaVelocidade")
let resultadoDaVelocidade = document.getElementById("resultadoDaVelocidade")

function Gerar Multa(){
    if (valorVelocidade.value > 80) {
        let sub = valorVelocidade.value - 80;
        let mult = sub * 5; 
        resultadoDaVelocidade.innerHTML = mult
    } else {
        resultadoDaVelocidade.innerHTML = "Você não foi multado"   
    }
}