class MsgRecuperacaoSenha {
    constructor() { throw new Error("Não é possível instanciar esta classe!")}

    static montaLayout() {
        return `
            <div class="d-flex flex-column container justify-content-center mt-3">
                <h2 class="text-center texto-verde">E-mail enviado com sucesso!</h2>
                <a href="" class="mt-3 mb-5 texto-verde link-retorno">Voltar para o início</a>
            </div>	
        `;
    }

}