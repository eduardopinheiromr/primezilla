const $ = document.querySelector.bind(document);
const all$ = document.querySelectorAll.bind(document);
let indexA;
const deletedElements = all$(".delete")

const cards = all$(".card");
const img = all$(".link-info");
const main = $(".main");
const api = `https://www.omdbapi.com/?i=tt3896198&apikey=f2f6a391`
const cartazes = [
  "&t=inception",
  "&t=the_wolf_of_wall",
  "&t=shutter_island",
  "&t=avengers_endgame",
  "&t=captain_marvel",
  "&t=spider-man",
  "&t=logan",
  "&t=furious_7",
  "&t=the_lord_of_the_rings_the_return",
  "&t=the_matrix",
  "&t=inside_out",
  "&t=nightcrawler",
]

const urlPoster = (urlFilme) => api + urlFilme;
const reqPosters = cartazes.map(urlPoster);

PosterController.addPosters(cards, reqPosters); 

img.forEach((item, index) => {
  console.log(index)
  item.onclick = (event) => {
    event.preventDefault();
    deletedElements.forEach((item) => item.remove())
    InfoPosterController.geraFilmes(main, reqPosters[index]);
  }
});


