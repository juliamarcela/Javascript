/* No javaScript, eventos são ações ou ocorrências que acontecem na página web que estamos implementando. Esses eventos geralmente invocam funções que irão executar as operações desejadas. Alguns exemplos são:
- Quando um usuário clica no mouse;
- Quando uma página da web é carregada;
- Quando uma imagem foi carregada;
- Quando o mouse passa sobre elemento;
- Quando um usuário pressiona uma tecla;
*/

let texto = document.getElementById('texto')
function  Mudar(){
    texto.innerHTML = 'São os alunos santo Amaro 2023!'
}

let mostrar = document.getElementById('demo')
function aperte(){
    mostrar.innerHTML = Date();
}