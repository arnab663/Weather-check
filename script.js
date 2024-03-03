
const apiKey = "978bb80ec3c6d4e6f96a6234fbf72dd4"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore"

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    let data = await response.json()

    document.querySelector("#city").innerHTML = data.name
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "℃"
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%"
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h"

}

checkWeather("bangalore")