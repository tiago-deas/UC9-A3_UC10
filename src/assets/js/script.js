//Fechamaneto do formulário de cadastro (clicar fora do mesmo)

var modalCadastro = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modalCadastro) {
    modalCadastro.style.display = "none";
  }
}

//Página de Login

function Login(event) {
  event.preventDefault();
  var usuario = document.getElementsByName('uname')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('psw')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "admin@email.com" && senha == "123") {
    document.location.href="inicial"
  }else{
    window.alert("Dados incorretos, tente novamente");
  }
}



// Menu Dropdown

$("#menu-dropdown").mouseenter(function() {
  $("#opcoes").stop().slideToggle();
});

$("#dropdown").mouseleave(function() {
  $("#opcoes").stop().slideToggle();
});

