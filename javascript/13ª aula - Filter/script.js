//O método filter cria um novo array com o resultado do filtro aplicado pelo método, ou seja, os elementos qu "passaram" na condição configurada no filtro. A sintaxe do filtro. 
//Para criar um novo vetor, terá que passar por uma função

const idades = [32,33,16,40];
let filtroIdade = idades.filter(idade);
let receber = document.getElementById("demo")

receber.innerHTML = filtroIdade

function idade(idades){
    return idades >= 18
}