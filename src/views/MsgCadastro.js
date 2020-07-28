class MsgCadastro {
    constructor() { throw new Error("Não é possível instanciar esta classe!")}

    static montaLayout() {
        return `
        <div class="container-msgCadastro">
            <div class="d-flex flex-column justify-content-center mt-3">
                <h2 class="text-center mensagemConfirmacao-small">Cadastrado com sucesso!</h2>
                <a href="" class="mt-3 mb-5 texto-verde link-retorno">Voltar</a>
            </div>
        </div>   
        `;
    }

}