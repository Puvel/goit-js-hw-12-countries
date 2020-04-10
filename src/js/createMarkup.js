import countriesListTamplate from '../tamplates/countriesListTamplate.hbs';
import countriesItemTamplate from '../tamplates/countriesItemTamplate.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';
const refs = {
  countriesList: document.querySelector('.countries'),
};

export default function (data) {
  if (data.length > 1 && data.length <= 10) {
    const createMarkupList = data
      .map(dataItem => countriesListTamplate(dataItem))
      .join('');
    refs.countriesList.innerHTML = createMarkupList;
  }
  if (data.length === 1) {
    const createMarkupItem = data
      .map(dataItem => countriesItemTamplate(dataItem))
      .join('');
    refs.countriesList.innerHTML = createMarkupItem;
  }
  if (data.length > 10) {
    const notice = PNotify.notice({
      text: 'Too many matches found. Please enter a more specific query!',
      modules: {
        Buttons: {
          closer: false,
          sticker: false,
        },
      },
    });
    notice.on('click', function () {
      notice.close();
    });
  }
}
