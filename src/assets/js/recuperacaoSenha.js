// Botão Enviar - Página de recuperar a senha

let botaoRecuperarSenha = document.getElementById("botao-recuperacao")

botaoRecuperarSenha.addEventListener("click", event => {
    event.preventDefault();

    let formRecuperacao = document.getElementById("form-recuperacao");
    formRecuperacao.innerHTML = MsgRecuperacaoSenha.montaLayout();
    
});
