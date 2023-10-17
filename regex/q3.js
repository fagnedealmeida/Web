function verificar(){
    var regex = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[0-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[0-9]\d|\d))$/
    var ip = document.getElementById('ipv4').value;
    var validar = regex.test(ip);

    if (validar == true){
        alert("IPV4 Válido !")
    }else{
        alert("IPV4 Inválido !")
    }

}