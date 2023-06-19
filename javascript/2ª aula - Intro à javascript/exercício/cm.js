var metros = document.getElementById("metros");
var centimetros;
var resultado = document.getElementById("resultado");


function Centimetros()
{
    metros.value;
    
    centimetros = parseInt(metros.value) * 100;
    resultado.innerHTML = centimetros;
}