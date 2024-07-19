
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json()) // convert json into array
  .then(data => cities.push(...data));  // using spreadin operator because directly pushing elements was creating array of array

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); //g is for global search and i is for insensitive(search irrespective of lower or uppercase)
    return place.city.match(regex) || place.state.match(regex)
  });
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
  // console.log(this.value);
  const myArray = findMatches(this.value, cities);
  // console.log(myArray);

  // const html = myArray.map(place =>{
  //   return `
  //   <li>
  //       <span class="name">${place.state}, ${place.city}</span>
  //       <span class = "population">${place.population}</span>
  //   </li>
  //   `
  // }).join('');

  const html = myArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');


  suggestions.innerHTML = html;

  
}


const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);