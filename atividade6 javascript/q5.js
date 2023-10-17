// Usando o objeto Date() possbilitando criar datas
// Usando DOM para capturar o elemento do HTML, no caso o botão.
var date = new Date();
var data = document.getElementById("data");

// Criando um evento clique, para o botão, junto a chamada da função
data.addEventListener("click", function(){
// função do objeto Date que converte baseada na localidade e exibe.
    document.write(date.toLocaleDateString('pt-BR'));
})
