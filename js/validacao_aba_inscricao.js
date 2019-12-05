function validaEmail(email) {
	if  (email.indexOf('.') < 0){
		alert('Digite o email corretamente');
		validacao = true;
	}
	else {
		validacao = false;
	}
	return validacao;
}


function validaLogin(){
	email = document.getElementById('login_senha').value;
	senha =document.getElementById('login_senha').value;
	validaEmail(email);
}