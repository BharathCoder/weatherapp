const fetchWeather = async () => {
	
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ayodhya';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd16e40f63emshfae2a15808de4dcp1cd3e3jsn42742c0602d1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
		document.querySelector('[data-temp]').innerHTML = `${result.temp} &deg;C`
		document.getElementById('cloud_pct').innerText = result.cloud_pct
		document.getElementById('humidity').innerText = `${result.humidity}%`
		document.getElementById('low').innerHTML = `${result.min_temp} &deg;C` 
		document.getElementById('high').innerHTML = `${result.max_temp} &deg;C` 
		document.getElementById('windsped').innerText = `${result.wind_speed} km/h`
			const sunriseTime = result.sunrise
			const ab = new Date(sunriseTime)
		document.getElementById('sunrise').innerText = ab.toLocaleTimeString()
	console.log(result);
} catch (error) {
	console.error(error);
}
}
fetchWeather()