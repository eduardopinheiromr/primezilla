const $ = document.getElementById.bind(document);
const inputBusca = $('input-busca')
const btnBusca = $('btn-buscador')

btnBusca.addEventListener('click', handleBusca)

function handleBusca() {
  let element = $('display-busca')
  let nomeDoFilme = inputBusca.value;
  const url = `https://www.omdbapi.com/?t=${nomeDoFilme}&apikey=f3982364`

  BuscaController.buscarFilme(url, element)
}