import './css/styles.css';
var debounce = require('lodash.debounce');
import handleInput from './js/input';
import '@pnotify/core/dist/BrightTheme.css';



const refs = {
    inputBtn: document.querySelector('.input-form'),
    countiresContainer: document.querySelector('.countires-gallery'),
    countryBox: document.querySelector('.coutry'),
}

refs.inputBtn.addEventListener('input', debounce(handleInput, 500))


export default refs;