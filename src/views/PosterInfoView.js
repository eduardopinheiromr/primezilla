class PosterInfoView{
  constructor(){

  }

  static addInfoFilme(model){
    return `
    <section class="section-poster-info container py-5 ">
      <div class="row justify-content-center">
        <picture class="col-12 col-sm-6 col-md-5 d-flex justify-content-center"><img class="poster-filme-info" src="${model.poster}" alt="poster do filme ${model.titulo}"></picture>
        <ul class="lista-poster-info col-12 col-sm-6 col-md-5">
          <li class="info-filme texto-verde"> <span class="filme-info"> Nome do filme: </span> ${model.titulo}</li>
          <li class="info-filme texto-verde"> <span class="filme-info"> Ano de lançamento: </span> ${model.ano}</li>
          <li class="info-filme texto-verde"> <span class="filme-info"> Diretor:</span> ${model.diretor}</li>
          <li class="info-filme texto-verde"> <span class="filme-info"> Sinopse:</span> ${model.sinopse}</li>
        </ul>
      </div>
    </section>
    `
  }
}