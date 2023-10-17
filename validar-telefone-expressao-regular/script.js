function verificar() {
  
  numero = document.getElementById('numero').value;
  var regex = /^\([1-9]{2}\)9?[6-9][\d]{3}\-[\d]{4}$/;
  $resultado = regex.test(numero);
  
  if ($resultado == true) {
    alert("O número digitado é um celular");
    
  } else {
    
    alert("O número digitado é telefone fixo");
  }
}

