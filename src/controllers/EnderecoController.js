class EnderecoController {
    constructor() { throw new Error("Não é possível instanciar essa classe!") }


    static geraEndereco(cep) {
        
        cep = cep.split("-").join("");

        if(cep.length <= 7 || cep.length > 8) {
            mensagemErro.classList.remove("invisivel");
            campoCEP.value = "";
            campoLogradouro.value = "";
            campoCidade.value = "";
            campoEstado.value = "";
            setTimeout(mensagemDeErro,2000);
        }

        let reqEndereco = new XMLHttpRequest;

        reqEndereco.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
     
        reqEndereco.addEventListener("load", () => {
            if(reqEndereco.status == 200) {
                let reqJSON = JSON.parse(reqEndereco.responseText);
                if(reqJSON.erro) {

                    mensagemErro.classList.remove("invisivel");
                    
                    campoCEP.value = "";
                    limpaFormulario();

                } else {
                   
                    mensagemErro.classList.add("invisivel");

                    limpaFormulario();

                    let enderecoUsuario = {
                        logradouro: reqJSON["logradouro"],
                        bairro: reqJSON["bairro"],
                        cidade: reqJSON["localidade"],
                        estado: reqJSON["uf"]
                    }
    
                    campoLogradouro.value = enderecoUsuario.logradouro;
                    campoCidade.value = enderecoUsuario.cidade;
                    campoEstado.value = enderecoUsuario.estado;
                }
            }
        });

       reqEndereco.send();
    }
}  