class Endereco {
    constructor(logradouro, bairro, cidade, estado) {
        this._logradouro = logradouro; 
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
    }


    _retornaEndereco() {
        return {
            logradouro: this._logradouro,
            bairro: this._bairro,
            cidade: this._cidade,
            estado: this._estado
        }
    }

    get retornaEndereco(){
        return this._retornaEndereco();
    }
}
