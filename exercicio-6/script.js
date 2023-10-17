function verificar(){
  

  var date = new Date();

  ano = parseInt(document.getElementById('ano').value);

  if (parseInt(date.getFullYear()) - ano >= 18){
    alert("Você é maior de idade");
  } else {
    alert("Você não maior de idade");
  }

}
    
  
