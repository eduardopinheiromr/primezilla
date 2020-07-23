class InfoPosterController {
  constructor() {

  }

  static geraFilmes(element, url,) {
  
      fetch(url)
        .then(response => response.json())
        .then(json => {
          const filme = new Filme(
            json.Poster,
            json.Title,
            json.Released,
            json.Director,
            json.Plot);
            console.log(filme)
          element.innerHTML = PosterInfoView.addInfoFilme(filme);
        });
      console.log("1")
  }
}