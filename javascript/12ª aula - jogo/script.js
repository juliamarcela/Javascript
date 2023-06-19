let NomeDoJogador;
let Resposta;

NomeDoJogador = document.getElementById("NomeDoJogador")
Resposta = document.getElementById("resposta")

function EnviarNome()
{
    if(NomeDoJogador.value == ""){
        alert("Insira um nome")
    }
    else{
        Resposta.innerHTML = "Olá, " + NomeDoJogador.value + ". vamos jogar"
    }
    Resposta.innerHTML = "Olá, " + NomeDoJogador.value + ". Vamos jogar!"
}