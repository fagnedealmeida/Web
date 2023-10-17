// usando DOM para capturar os elementos do HTML
var verde = document.querySelector("#verde");
var vermelho = document.getElementById("vermelho");
var body = document.getElementById("body");

// addEventListener usado para capturar eventos ao clicar
verde.addEventListener("click", function() {
    body.style.backgroundColor = 'Green';
})

vermelho.addEventListener("click", function() {
    body.style.backgroundColor = 'Red';
})
