const apiKey = "b9468de933227e7bcb3692696e01b3ca";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(cityName) {
  try {
    const response = await fetch(apiurl  + cityName + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".feels").innerHTML = "FeelsLike" + data.main.feels_like + "°C";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "ppm";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".visibility").innerHTML = data.visibility + "m";
   
    
    const weatherIcon = document.querySelector('.weather-icon');
    console.log(data.weather[0].main);

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
      console.log(weatherIcon.src);
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png";
      console.log(weatherIcon.src);
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
      console.log(weatherIcon.src);
    }
    else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "images/snow.png";
      
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
    }
    

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

document.querySelector("button").addEventListener("click", (ev) => {
  ev.preventDefault();
  const city = document.querySelector("input").value;
  checkWeather(city);
});



  


