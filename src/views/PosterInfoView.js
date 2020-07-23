class PosterInfoView{
  constructor(){

  }

  static addInfoFilme(model){
    return `
    <section class="section-poster-info container py-5 ">
      <div class="row justify-content-center">
        <picture class="col-12 col-sm-6 col-md-5 d-flex justify-content-center"><img class="poster-filme-info" src="${model.poster}" alt="poster do filme ${model.titulo}"></picture>
        <ul class="lista-poster-info col-12 col-sm-6 col-md-5">
          <li class="info-filme texto-verde">Nome do filme: <span id="nome-filme">${model.titulo}</span></li>
          <li class="info-filme texto-verde">Ano de lançamento: <span id="ano-lancamento">${model.ano}</span></li>
          <li class="info-filme texto-verde">Diretor: <span id="diretor">${model.diretor}</span></li>
          <li class="info-filme texto-verde">Sinopse: <span id="sinopse">${model.sinopse}</span></li>
        </ul>
      </div>
    </section>
    `
  }
}