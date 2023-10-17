function validarDados(){
/* variáveis criadas para pegar a informação do formulário html 
e manipular no javascript. NOME DO ELEMENTO, NOME DA VARIAVEL DO ELEMENTO, VALOR DO ELEMENTO*/
	var nome = document.forms1.name.value;
    var idade = Number(document.forms1.idade.value);

/* condições para validação dos dados NOME e IDADE */
    if(nome == "" && idade < 18){
        alert("Campos preenchidos incorretamente");
        return false;
    }else if (idade < 18){
        alert("Idade informada menor que 18 anos.")
        return false;
    }else if(nome == ""){
        alert("Nome não informado")
        return false;
    }
/* Para validação de dados deve-se fazer uso do TRUE e FALSE 
para verificar os campos e possibilitar as ações com a função */
    return true;
        
}

			
