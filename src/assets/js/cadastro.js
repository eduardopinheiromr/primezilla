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
let mensagemErro = document.getElementById("mensagemErro-small");
let mensagemConfirmacao = document.getElementById("mensagemConfirmacao-small");
let notificacao = document.getElementById("notificacao-small");

campoCEP.addEventListener("focusout", () => {
    return EnderecoController.geraEndereco(campoCEP.value);
});

function mensagemDeErro() {
    return mensagemErro.classList.add("invisivel");
}

function mensagemDeConfirmacao() {
    return mensagemConfirmacao.classList.add("invisivel");
}

function notificarSenha() {
    return notificacao.classList.add("invisivel");
}

function limpaFormulario() {
    campoLogradouro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

campoSenha.addEventListener("focusout", () => {
    if(campoSenha.value.length < 6 || campoSenha.value.length > 8) {
        notificacao.classList.remove("invisivel");
        notificacao.classList.add("mensagemErro-small");
        notificacao.textContent = "Quantidade de caracter não permitida!";
        setTimeout(notificarSenha, 2000);
    } else {
        campoConfirmarSenha.addEventListener("focusout",() => {
    
            if(campoSenha.value.localeCompare(campoConfirmarSenha.value) == 0) {
                mensagemConfirmacao.classList.remove("invisivel");
                mensagemConfirmacao.classList.add("mensagemConfirmacao-small");
                mensagemConfirmacao.textContent = "As senhas são iguais!"
                setTimeout(mensagemDeConfirmacao,2000);
            } else {
                mensagemConfirmacao.classList.remove("invisivel");
                mensagemConfirmacao.classList.remove("mensagemConfirmacao-small");
                mensagemConfirmacao.classList.add("mensagemErro-small");
                mensagemConfirmacao.textContent = "As senhas são diferentes!"
                campoSenha.value = "";
                campoConfirmarSenha.value = "";
                setTimeout(mensagemDeConfirmacao,2000);
            }
        });
    }
})





botaoCadastrar.addEventListener("click", event => {
    event.preventDefault();

    let formCadastro = document.getElementById("form-cadastro");
    formCadastro.innerHTML = MsgCadastro.montaLayout();
    
});






