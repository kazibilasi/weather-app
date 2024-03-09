const apiKey = '2f6d762279536158479e1e609f21420d'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka'

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;
}

checkWeather()