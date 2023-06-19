
let N1 = document.getElementById("N1");
let N2 = document.getElementById("N2");
let operacao = document.getElementById("operacao");
let resultado = document.getElementById("resultado")

function calculo(){

    switch(operacao.value){
        case "+":
            let soma = parseInt(N1.value) + parseInt(N2.value)
            resultado.innerHTML = soma
            break;
        case "-":
            let subtracao = parseInt(N1.value) - parseInt(N2.value)
            resultado.innerHTML = subtracao
            break;
        case "/":
            let divisao = parseInt(N1.value) / parseInt(N2.value)
            resultado.innerHTML = divisao
            break;
        case "*":
            let multiplicacao = parseInt(N1.value) * parseInt(N2.value)
            resultado.innerHTML = multiplicacao
            break;

    }
}