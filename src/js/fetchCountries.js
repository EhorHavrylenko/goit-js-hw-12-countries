import { error } from '@pnotify/core';
import refs from '../index.js';

function fetchCountries(searchQuery){

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    return fetch(url) 
       .then(response => response.json()) 
       .then(data => { 

           if(data.length > 10){
            error({
                text: "Too many matches found.Please enter a more specific query!"
              }); 
           } 
           
           else if(data.length > 2 && data.length < 10){
               refs.countiresContainer.insertAdjacentHTML('beforeEnd', data.map((el) => `<li>${el.name}</li>`).join(''))
           }

           else {
            refs.countryBox.insertAdjacentHTML('beforeEnd', data.map((el) => `
            <div class="country-box">
            <h1>${el.name}</h1>
            <img src="${el.flag}" width="500px" margin-bottom="5px">
            <p><span>Capital:</span>${el.capital}</p>
            <p><span>Population:</span>${el.population}</p>
            <ul><span>Languages:</span>${el.languages.map((el) => `<li>${el.name}</li>`).join('')}</ul>
            </div>`))
           }
           
        })

       .catch(error => console.log(error))
}

export default fetchCountries;