class Filme{
  constructor(poster, titulo, ano, diretor, sinopse){
    this._poster = poster;
    this._titulo = titulo;
    this._ano = ano;
    this._diretor = diretor;
    this._sinopse = sinopse;
  }
  // getters para o encapsulamento
  get poster(){
    return this._poster;
  }

  get titulo(){
    return this._titulo;
  }

  get ano(){
    return this._ano;
  }

  get diretor(){
    return this._diretor;
  }

  get sinopse(){
    return this._sinopse;
  }


  // retorna um objeto com a copia dos valores
  retornaInformacoes(){
    return {
      poster: this.poster,
      titulo: this.titulo,
      ano: this.ano,
      diretor: this.diretor,
      sinopse: this.sinopse,
    }
  }

}