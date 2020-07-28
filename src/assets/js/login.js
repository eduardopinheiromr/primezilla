
let botaoLogin = document.getElementById("botao-login")

botaoLogin.addEventListener("click", event => {
    event.preventDefault();

    let formLogin = document.getElementById("form-login");
    formLogin.innerHTML = MsgLogin.montaLayout();
    
});
