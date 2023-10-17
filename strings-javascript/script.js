
function validar() {
  var let = document.querySelector('#letra').value;
  var fra = document.querySelector('#frase').value;
  var quantidade = 0;

  for (var i = 0; i < fra.length; i++) {
    if (fra[i] == let && let.length == 1) {
      quantidade++;
         
    }
  }
  if (let.length > 1) {
    alert("você digitou mais caracteres do que o permitido.");
  }
  alert(quantidade + " ocorrências da letra " + let);
}
