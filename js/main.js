const form = document.querySelector('.weather__form');
const elInput = document.querySelector('.weather__input');
const city = document.querySelector('.weather__city');
const temp = document.querySelector('.weather__temp');
const holat = document.querySelector('.weather__holat');
const fromTemp = document.querySelector('.weather__form-temp');
const toTemp = document.querySelector('.weather__to-temp');

const api ={
  key: 'f5deb38afcb1af7bcefbcecf3c6dac44',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
}

function getResult(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then((weather) => {
    return weather.json();
  })
  .then(displayResult)
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  getResult(elInput.value);
  elInput.value = "";
});

function displayResult(weather) {
  city.innerHTML = `${weather.name} | ${weather.sys.country}`;
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  holat.innerHTML =  weather.weather[0].main;
  fromTemp.innerHTML = `${Math.round(weather.main.temp_min)}°C / `
  toTemp.innerHTML = `${Math.round(weather.main.temp_max)}°C`;
}
