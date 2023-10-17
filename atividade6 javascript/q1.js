// Necessário colocar a captura dos dados com DOM dentro da função.
// Em outros momentos foi declarada a varia de captura fora da função e o não capturava valor algum
function saudacao(){
	var botao = document.getElementById('btn');
var nome = document.getElementById('nome').value;
var sobrenome = document.getElementById('sobrenome').value;
    alert("Olá " + nome + " " + sobrenome);
    
}





