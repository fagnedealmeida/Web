// Variável para capturar imagem com DOM
var apagada = document.querySelector("#img1");

// Criar evento ao clicar na imagem
apagada.addEventListener("click", function(){

// Condição para verificar SRC de determinada foto, que ao clique será alterado.
    if (apagada.getAttribute("src") == "lampada.jpg"){
// Uso do setAtribute para mudar o valor do SRC (assim, alterando as imagens)
// Uso do getAtribute para retornar o valor do SRC (verificar o valor SRC e fazer a condição)
        apagada.setAttribute("src","lampada-on.jpg");
    } else{
        apagada.setAttribute("src", "lampada.jpg");
    }
    
})


