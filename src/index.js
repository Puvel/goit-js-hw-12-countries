import './styles.css';
import 'pnotify/dist/PNotifyBrightTheme.css';
import debounce from 'lodash.debounce';
import createMarkup from './js/createMarkup';
import fetchCountries from './js/fetchCountries';

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
    .then(data => createMarkup(data))
    .catch(error => console.error('ERROR---', error));
}
