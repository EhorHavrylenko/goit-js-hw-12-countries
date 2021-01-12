import fetchCountries from './fetchCountries';
import refs from '../index.js';

function handleInput(e){
   e.preventDefault();
   let searchQuery = e.target.value;
   clearHTML();
   return fetchCountries(searchQuery)
}

function clearHTML(){
   refs.countiresContainer.innerHTML = '';
   refs.countryBox.innerHTML = '';
}

export default handleInput;

