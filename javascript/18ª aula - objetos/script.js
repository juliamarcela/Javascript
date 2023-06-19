let Aluno = {
    PrimeiroNome: 'Eduardo',
    segundoNome: 'Ximenes',
    Idade: 18,
    Altura: 1.85,
    Peso: 90,
    fullName: function(){
        return this.PrimeiroNome + " " + this.segundoNome
    }
}

let a = ["a", 2, "b"]

const tarefas = [
    {
    id: 1,
    texto: 'Levar o lixo para fora',
    Completado: true,
    },
    {
    id: 2,
    texto: 'Fazer miojo',
    Completado: true,
    },
    {
    id: 3,
    texto: 'Dormir',
    Completado: false,
    }
]