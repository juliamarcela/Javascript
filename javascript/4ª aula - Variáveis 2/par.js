let receber = document.getElementById("ReceberNumero");
let mostrar = document.getElementById("ParOuImpar");

function Par(){
    if(receber.value % 2 == 0){
    mostrar.innerHTML = "O número é par"
    }
    else{
        mostrar.innerHTML = "O número é ímpar"
    }
}