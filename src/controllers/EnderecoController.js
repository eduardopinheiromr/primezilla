class EnderecoController {
    constructor() { throw new Error("Não é possível instanciar essa classe!") }


    static geraEndereco() {
        let reqEndereco = new XMLHttpRequest;

        reqEndereco.open("GET", `https://viacep.com.br/ws/${campoCEP.value}/json/`);

        reqEndereco.addEventListener("load", () => {
            
            let reqJSON = JSON.parse(reqEndereco.responseText);
        
            let enderecoUsuario = {
                logradouro: reqJSON["logradouro"],
                bairro: reqJSON["bairro"],
                cidade: reqJSON["localidade"],
                estado: reqJSON["uf"]
            }

            
            console.log(enderecoUsuario.logradouro)
            console.log(enderecoUsuario.bairro)
            console.log(enderecoUsuario.cidade)
            console.log(enderecoUsuario.estado)
        });

       reqEndereco.send();
    }
}  