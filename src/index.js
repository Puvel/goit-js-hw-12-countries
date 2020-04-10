import './styles.css';
import 'pnotify/dist/PNotifyBrightTheme.css';
import debounce from 'lodash.debounce';
import createMarkup from './js/createMarkup';
import fetchCountries from './js/fetchCountries';
import PNotify from 'pnotify/dist/es/PNotify.js';

const refs = {
  countriesList: document.querySelector('.countries'),
  searchInput: document.querySelector('#search'),
};

refs.searchInput.addEventListener('input', debounce(handleInput, 500));

function handleInput(e) {
  const inputValue = e.target.value;
  if (inputValue === '') {
    refs.countriesList.innerHTML = '';
    return;
  }
  fetchCountries(inputValue)
    .then(data => {
      if (data.status >= 400) {
        PNotify.error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
        return;
      }
      createMarkup(data);
    })
    .catch(error => console.error('ERROR---', error));
}
