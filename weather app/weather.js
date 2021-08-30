let app = document.querySelector("#app")

async function getWeather(city){
	let response = await fetch(
		`https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
		{
			headers:{"api-key": "7ae49ab7730744968ef04f0e39684373"}
		}

		)
	let data = await response.json()
	let today = data.result.hava.dayList[0]
	let now_temp = data.result.hava.summary.temp

	switch (today.condition) {
		case "آرام":
			today.color = "color1"
			break;	
		case "نسیم":
			today.color = "color2"
			break;
		case "باد ملایم":
			today.color = "color3"
			break;
		case "باد شدید":
			today.color = "color4"
			break;
		case "طوفانی":
			today.color = "color4"
			break;
		default:
			today.color = "color1"
			break;
	}
	app.innerHTML = `
					<div class="card">
                        <div class="weather-wrapper ${today.color}"><i class="wi ${today.symbol}" style="font-size:3rem;"></i></div>
                        <div class="card-body text-center">
                        	<h3>${city}</h3>
                        	<small class="mb-3 d-block">${today.condition}</small>
                        	<div>
                        		<button class="btn btn-danger">${today.max}</button>
                        		<button class="btn btn-success">${now_temp}</button>
                        		<button class="btn btn-secondary">${today.min}</button>
                        	</div>

                        </div>
                	</div>

	`
}

let city = document.querySelector("#city")
getWeather("تهران")

city.addEventListener("submit", e=>{
	e.preventDefault()
	getWeather(e.target.city.value)
})