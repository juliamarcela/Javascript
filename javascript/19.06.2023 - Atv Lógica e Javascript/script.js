
let N1 = document.getElementById("N1");
let N2 = document.getElementById("N2");
let N3 = document.getElementById("N3");
let N4 = document.getElementById("N4");
let aprovado = document.getElementById("resultado")
let Gerarmedia; 

function media(){
    Gerarmedia = (parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value) + parseInt(N4.value))/4;
    if (Gerarmedia >= 7){
        aprovado.innerHTML = "A sua nota foi " + Gerarmedia + ", você foi aprovado"
    }
    else{
        aprovado.innerHTML = "A sua nota foi " + Gerarmedia + ", você foi reprovado"  
    }
}