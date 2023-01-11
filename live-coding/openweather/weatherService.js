const apiKey = "638df43929148df653121b2bc82d9691";

const cityLookupURL = cityName => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
}

const weatherLookupURL = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

function findWeather(coords, callback) {
  let url = weatherLookupURL(coords.lat, coords.lon);
  $.get(url, callback);
}

function findCityGeo(cityName, callback) {
  let url = cityLookupURL(cityName);
  $.get(url, callback);
}

function searchWeather(location, callback) {
  findCityGeo(location, data => {
    let coords = { lat: data[0].lat, lon: data[0].lon }

    findWeather(coords, data => {
      let weatherData = {
        location: location,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        feelTemp: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        cloud: data.clouds.all,
        wind: data.wind.speed
      }

      callback(weatherData);
      //renderWeather(weatherData);
    });
  });
}