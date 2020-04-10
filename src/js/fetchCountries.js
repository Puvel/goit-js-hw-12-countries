export default function (searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(baseUrl + searchQuery)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('ERROR---', error));
}
