class PosterView{
  constructor(){

  }

  static geraPoster(model){
    return `
    <img class="card-format " src="${model.poster}"
              alt="Card image cap">
    `
  }
}