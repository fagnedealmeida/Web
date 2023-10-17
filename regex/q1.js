function verificar(){

    var regex = /^[\-*]+[0-9]{1,}$/;
    numero = document.getElementById('numero').value;
    if (numero.match(regex)){
        alert("O número digitado é inteiro.");
    }else{
        alert("O número digitado é real");
    }
}