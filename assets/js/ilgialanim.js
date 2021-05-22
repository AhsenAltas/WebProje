const url = 'https://api.openweathermap.org/data/2.5/'
const key = '125a75b9c844b1ff504f243d2e005e2f'

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}


window.onload = function () {
    getResult("Ankara");
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}


const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_min)}°C`
}





const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)