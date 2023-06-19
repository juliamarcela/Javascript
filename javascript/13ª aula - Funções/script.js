function mult(a,b)
{
    return a*b
}

let mult = (a,b) => {
    return a*b
}


//Sintaxe da Função é definida com function palavra-chave, seguida por um nome, seguido por parênteses().
//Quando o JavaScript atinge uma return instruções, a função para de ser executada.
//Se a função foi innvocada a partir de uma instrução, o JavaScript "retornará" para executar o código após instrução invocada. 

let celsius = document.getElementById("Celsius")
let resultado = document.getElementById("resultado")

function toCelsius(){
    return resultado.innerHTML = (celsius.value*1.8) + 32
}

// Crie uma função na qual utilize parâmetros para descobrir se um valor é par ou ímpar

function parouimpar(q){
    if (q % 2 == 0){
        return console.log("Par")
    }
    else{
        return console.log("ímpar")
    }
} 

//escreva uma função que retorne o maior de dois números 

function maior(x,y){
    if(x > y){
        return console.log(x)
    }
    else{
        return console.log (y)
    }
}

const Maior = (x,y) => {x>y? console.log(x) : console.log(y)}