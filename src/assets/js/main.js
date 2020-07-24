// Formulário Cadastro 

let campoNome = document.getElementById("nome-cadastro");
let campoSobrenome = document.getElementById("sobrenome-cadastro");
let campoEmail = document.getElementById("email-cadastro");
let campoRG = document.getElementById("rg-cadastro");
let campoSenha = document.getElementById("senha-cadastro");
let campoConfirmarSenha = document.getElementById("confirmarSenha-cadastro");
let campoLogradouro = document.getElementById("logradouro-cadastro");
let campoComplemento = document.getElementById("complemento-cadastro");
let campoCidade = document.getElementById("cidade-cadastro");
let campoEstado = document.getElementById("estado-cadastro");
let campoCEP = document.getElementById("cep-cadastro");
let botaoCadastrar = document.getElementById("botao-cadastro");


botaoCadastrar.addEventListener("click", event => {
    event.preventDefault();
    
    EnderecoController.geraEndereco();

});
