//Variáveis
const apiKey = "dc072d79ae3cef31b37c9f7436d64b88";
const apiCountryURL = "https://countryflagsapi.com/png/";


const cityInput = document.querySelector("city-input");
const searchBtn = document.querySelector("#search");


const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature')
const descElement = document.querySelector('#descripition')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

//Funções

const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;


    const res = await fetch(apiWeatherURL);
    const data = await res.json();

   return data;
};

const showWeatherData = async (city) => {
    getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = dataweather[0]
}



//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;


    showWeatherData("city");
})