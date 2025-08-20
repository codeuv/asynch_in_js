let api_key = 'd998cd43af73fd48f29dc2803d534419'
//this is a wrong api change it to your api by vistin the website
const date = document.querySelector('#date');
const city = document.querySelector('#city');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
const tempmax = document.querySelector('#tempmax');
const templow = document.querySelector('#templow');
const iconElement = document.querySelector('#weather-icon');
const descElement = document.querySelector('#weather-description');

//show todays data
const monthsInString = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let todays_date = new Date();
let day = todays_date.getDate();
let month = todays_date.getMonth();
let year = todays_date.getFullYear();
date.textContent = ` ${monthsInString[month] } ${day} , ${year}`;

const app = document.querySelector('.weather-container');

const displayData = (data)=> {
    city.textContent = data.name;
    temp.textContent = data.main.temp ;
    tempmax.textContent = data.main.temp_max;
    templow.textContent = data.main.temp_min;
    iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    descElement.textContent = data.weather[0].description;
}

const getWeatherData = async (cityName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`);
        const data = await response.json();
        if(data.cod !== 200){
            alert(data.message|| "City Not Found")
            return;
        }
        return data;
    } catch {
        if(!api_key) alert("NO API PROVIDED")
        else alert("ERROR")
    }
}
const showDataInFE = async (cityName)=>{
    let data = await getWeatherData(cityName);
    if(data){
        displayData(data);
    }else{
        alert(ERROR)
    }
}
// getWeather(city.textContent);

const searchForCity = () =>{
    let citySearchElement = document.querySelector('.city-input')
    city_search = citySearchElement.value;
    showDataInFE(city_search)
    document.querySelector('.city-input').value = ''
}

document.querySelector('#city-search-input').addEventListener('click', searchForCity)

// const handleError = () =>{
//     getWeather("NEW YORK")
// }