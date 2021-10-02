//API URL and Key
const baseURL= 'https://api.nasa.gov/planetary/apod?api_key=ZX7HZcHK3wF9DUsCJ68GAcCP4qoAzGBSDicNbVK3&start_date=2021-10-01'

console.log(baseURL);

//Elements
let astronomyPic = document.getElementById('astronomyPic');
let picDescription = document.getElementById('picDescription');

// fetch(baseURL)
// .then(res => res.json())
// .then(json => (json))