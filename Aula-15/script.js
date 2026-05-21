//Escrevendo na pagina html com o JS
document.writeln("Olá mundo!");
document.writeln("<h2> Bem-vindo ao JavaScript</h2");

//Mensagem de alerta
//window.alert("Esta é uma mensagem de alerta!");

//InnerHTML
document.getElementById("title").innerHTML ="Aprendendo JavaScript com o melhor professor da UVV!!!";
//document.getElementById("title").style.backgroundColor="yellow";

//Cria a variável que receberar uma entrada...
let nome = prompt("Digite o seu nome: ")

const novafrase= document.getElementById("novafrase");

// get.ElementeById localiza e captura um elemento específico em uma página web utilizando o atributo id
document.getElementById("novafrase").innerHTML ="Olá, " + nome + "! Seja bem vindo ao JavaScript";

document.getElementById("novafrase").style.color= "blue";

document.getElementById("novafrase").style.fontSize="80px";

//Função
function exibirMensagem() {
    let nome = document.getElementById("nome").value;
    novafrase.innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript!";
    novafrase.style.color = "green";
    novafrase.style.fontSize = "50px";
}