
const apiKey = "978bb80ec3c6d4e6f96a6234fbf72dd4"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-button")

const weatherIcon = document.querySelector("#weather-icon")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    let data = await response.json()

    if(response.status==404){
        document.querySelector("#weather").style.display = "none"
        alert("Invalid city name !")
    }
    else{
        document.querySelector("#city").innerHTML = data.name
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "℃"
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%"
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h"

        if(data.weather[0].main=="Clouds") weatherIcon.setAttribute("src","./Images/clouds.png")
        if(data.weather[0].main=="Clear") weatherIcon.setAttribute("src","./Images/clear.png")
        if(data.weather[0].main=="Rain") weatherIcon.setAttribute("src","./Images/rain.png")
        if(data.weather[0].main=="Drizzle") weatherIcon.setAttribute("src","./Images/drizzle.png")
        if(data.weather[0].main=="Mist") weatherIcon.setAttribute("src","./Images/mist.png")

        document.querySelector("#weather").style.display = "block"
    }


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})