class PosterController {
  constructor() {

  }

  static addPosters(element, url) {
    onload = () => {
      element.forEach((item, index) => {
        fetch(url[index])
        .then(response => response.json())
        .then(json => {
          const poster = new Poster(json.Poster);
          item.innerHTML = PosterView.geraPoster(poster);
        })
      });
    }
  }
}