let x = document.getElementById("valorInicial");
let y = document.getElementById("valorFinal");

function Aperte(){
    while(x.value <= parseInt(y.value)){
        //Criar elemento p
        let paragrafo = document.createElement("p")
        //Criamos texto
        let texto = document.createTextNode(x.value)
        //Adicionamos um texto no seu elemento
        paragrafo.appendChild(texto);
        //Adicionar no body
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x.value)
        x.value++ //x = x + 1
    }
}