import axios from 'axios';
import 'regenerator-runtime/runtime';


let prevLink = '';
let nextLink = '';
const pokeContainer = document.querySelector('#poke-names');

init();

async function init(){
  const response = await getPokemon('https://pokeapi.co/api/v2/pokemon');
  displayPokeNames(pokemon);
}

async function getPokemon(url){
  const response = await axios.get(url);
  const data = response.data;
  prevLink = data.previous;
  nextLink = data.next;
  return data.results;
}

function displayPokeNames(pokemon) {
  pokemon.forEach(({ name }) => {
    const newName = document.createElement('div');
    newName.innerText = name;
    pokeContainer.appendChild(newName)
  });
}

document.getElementById('prev-btn').addEventListener('click',async () => {
  const pokemon = await getPokemon(prevLink);
  displayPokeNames(pokemon);
});
document.getElementById('next-btn').addEventListener('click',async () => {
  const pokemon = await getPokemon(nextLink);
  displayPokeNames(pokemon);
});


  