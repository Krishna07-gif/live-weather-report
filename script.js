const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeatherres = async (city) =>{
   const data = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
   const response = await data.json();
     console.log(response);
     return response;
}

const getWeather = async  (city) => {
  const cityNameElement = document.getElementById("cityName"); // Get the element by ID
  cityNameElement.innerHTML = city; // Update the innerHTML with the city name

  const bangalore =  await getWeatherres("Bangalore");
  console.log(bangalore);

  const kolkata =  await getWeatherres("Kolkata");
  console.log(kolkata);

  const chennai =  await getWeatherres("Chennai");
  console.log(chennai);

  const ahmedabad =  await getWeatherres("Ahmedabad");
  console.log(ahmedabad);

  const hyderabad =  await getWeatherres("Hyderabad");
  console.log(hyderabad);

  const pune =  await getWeatherres("Pune");
  console.log(pune);

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(async response => {
      console.log(response);
      // Update other weather details here
      
      document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
      document.getElementById("cloud_pct3").innerHTML = bangalore.cloud_pct;
      document.getElementById("cloud_pct4").innerHTML = kolkata.cloud_pct;
      document.getElementById("cloud_pct5").innerHTML = chennai.cloud_pct;
      document.getElementById("cloud_pct6").innerHTML = ahmedabad.cloud_pct;
      document.getElementById("cloud_pct7").innerHTML = hyderabad.cloud_pct;
      document.getElementById("cloud_pct8").innerHTML = pune.cloud_pct;

      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("temp2").innerHTML = response.temp;
      document.getElementById("temp3").innerHTML = bangalore.temp;
      document.getElementById("temp4").innerHTML = kolkata.temp;
      document.getElementById("temp5").innerHTML = chennai.temp;
      document.getElementById("temp6").innerHTML = ahmedabad.temp;
      document.getElementById("temp7").innerHTML = hyderabad.temp;
      document.getElementById("temp8").innerHTML = pune.temp;

      document.getElementById("feels_like").innerHTML = response.feels_like;
      document.getElementById("feels_like3").innerHTML = bangalore.feels_like;
      document.getElementById("feels_like4").innerHTML = kolkata.feels_like;
      document.getElementById("feels_like5").innerHTML = chennai.feels_like;
      document.getElementById("feels_like6").innerHTML = ahmedabad.feels_like;
      document.getElementById("feels_like7").innerHTML = hyderabad.feels_like;
      document.getElementById("feels_like8").innerHTML = pune.feels_like;

      document.getElementById("humidity").innerHTML = response.humidity;
      document.getElementById("humidity2").innerHTML = response.humidity;
      document.getElementById("humidity3").innerHTML = bangalore.humidity;
      document.getElementById("humidity4").innerHTML = kolkata.humidity;
      document.getElementById("humidity5").innerHTML = chennai.humidity;
      document.getElementById("humidity6").innerHTML = ahmedabad.humidity;
      document.getElementById("humidity7").innerHTML = hyderabad.humidity;
      document.getElementById("humidity8").innerHTML = pune.humidity;

      document.getElementById("min_temp").innerHTML = response.min_temp;
      document.getElementById("min_temp3").innerHTML = bangalore.min_temp;
      document.getElementById("min_temp4").innerHTML = kolkata.min_temp;
      document.getElementById("min_temp5").innerHTML = chennai.min_temp;
      document.getElementById("min_temp6").innerHTML = ahmedabad.min_temp;
      document.getElementById("min_temp7").innerHTML = hyderabad.min_temp;
      document.getElementById("min_temp8").innerHTML = pune.min_temp;

      document.getElementById("max_temp").innerHTML = response.max_temp;
      document.getElementById("max_temp3").innerHTML = bangalore.max_temp;
      document.getElementById("max_temp4").innerHTML = kolkata.max_temp;
      document.getElementById("max_temp5").innerHTML = chennai.max_temp;
      document.getElementById("max_temp6").innerHTML = ahmedabad.max_temp;
      document.getElementById("max_temp7").innerHTML = hyderabad.max_temp;
      document.getElementById("max_temp8").innerHTML = pune.max_temp;

      document.getElementById("wind_speed").innerHTML = response.wind_speed;
      document.getElementById("wind_speed2").innerHTML = response.wind_speed;
      document.getElementById("wind_speed3").innerHTML = bangalore.wind_speed;
      document.getElementById("wind_speed4").innerHTML = kolkata.wind_speed;
      document.getElementById("wind_speed5").innerHTML = chennai.wind_speed;
      document.getElementById("wind_speed6").innerHTML = ahmedabad.wind_speed;
      document.getElementById("wind_speed7").innerHTML = hyderabad.wind_speed;
      document.getElementById("wind_speed8").innerHTML = pune.wind_speed;

      document.getElementById("sunrise").innerHTML = response.sunrise;
      document.getElementById("sunrise3").innerHTML = bangalore.sunrise;
      document.getElementById("sunrise4").innerHTML = kolkata.sunrise;
      document.getElementById("sunrise5").innerHTML = chennai.sunrise;
      document.getElementById("sunrise6").innerHTML = ahmedabad.sunrise;
      document.getElementById("sunrise7").innerHTML = hyderabad.sunrise;
      document.getElementById("sunrise8").innerHTML = pune.sunrise;

      document.getElementById("sunset").innerHTML = response.sunset;
      document.getElementById("sunset3").innerHTML = bangalore.sunset;
      document.getElementById("sunset4").innerHTML = kolkata.sunset;
      document.getElementById("sunset5").innerHTML = chennai.sunset;
      document.getElementById("sunset6").innerHTML = ahmedabad.sunset;
      document.getElementById("sunset7").innerHTML = hyderabad.sunset;
      document.getElementById("sunset8").innerHTML = pune.sunset;
    })
    .catch(error => console.error(error));
}

const submitButton = document.getElementById("submit"); // Get the submit button element by ID
const cityInput = document.getElementById("city"); // Get the city input element by ID

submitButton.addEventListener("click", (e) => {
  e.preventDefault();   // iska use krne se reload nhi krega page 
  const city = cityInput.value; // Get the city value from the input field
  getWeather(city);
});
getWeather("Delhi");