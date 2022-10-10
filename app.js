const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const conditionOuput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.getElementById("weatherIcon");
const cloudOuput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

let cityInput = "kanpur";

cities.forEach((city) => {
    city.addEventListener("click", (e) => {
        cityInput = e.target.innerHTML;
        
        fetchWeatherData();

        app.style.opacity = "0";
    });
});
form.addEventListener("submit", (e) => {
    if(search.value.length == 0) {
        alert("Please type in a city Name");
    }
    else{
    
        cityInput = search.value;

        fetchWeatherData();

        search.value = "";

        app.style.opacity = "0";
    }

    e.preventDefault();
})


function fetchWeatherData() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityInput +"&appid=9487d206862ff776ab3f73a223d6c52f&units=metric")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.main.temp + "&#176;";
        conditionOuput.innerHTML = data.weather[0].description;

        nameOutput.innerHTML = data.name;
        

        cloudOuput.innerHTML = data.clouds.all + "%";
        humidityOutput.innerHTML = data.main.humidity + "%";
        windOutput.innerHTML = data.wind.speed + "km/h";

        const code = data.weather[0].id;


        if(code == 800) {
            app.style.backgroundImage = `url(./Images/clear.jpg)`;

            btn.style.background = "#e5ba92";
            icon.src = "./icons/113.png";
        }

        else if(
            code == 801 ||
            code == 802 ||
            code == 803 || 
            code == 804
        ) {
            app.style.backgroundImage = `url(./Images/cloudy.jpg)`;
            btn.style.background = "#fa6d1b";
            icon.src = "./icons/143.png";
        
        } 
        else if(
            code == 600 ||
            code == 601 ||
            code == 602 ||
            code == 611 ||
            code == 612 ||
            code == 613 ||
            code == 615 ||
            code == 616 ||
            code == 620 ||
            code == 621 ||
            code == 622
        ) {
            app.style.backgroundImage = `url(.Images/snowy.jpg)`;
            btn.style.background = "#647d75";
            icon.src = "./icons/326.png";
        }

        else if(
            code == 200 ||
            code == 201 ||
            code == 202 ||
            code == 210 ||
            code == 211 ||
            code == 212 ||
            code == 221 ||
            code == 230 ||
            code == 231 ||
            code == 232
        ) {
            app.style.backgroundImage = `url(./Images/thunder.jpg)`;
            btn.style.background = "#647d75";
            icon.src = "./icons/389.png";
        }

        else if(
            code == 300 ||
            code == 301 ||
            code == 302 ||
            code == 310 ||
            code == 311 ||
            code == 312 ||
            code == 313 ||
            code == 314 ||
            code == 321
        ) {
            app.style.backgroundImage = `url(.Images/drizzle.jpg)`;
            btn.style.background = "#647d75";
            icon.src = "./icons/296.png";
        }

        else if(
            code == 500 ||
            code == 501 ||
            code == 502 ||
            code == 503 ||
            code == 511 ||
            code == 504 ||
            code == 520 ||
            code == 521 ||
            code == 522 ||
            code == 531
        ) {
            app.style.backgroundImage = `url(./Rainy.jpg)`;
            btn.style.background = "#647d75";
            icon.src = "./icons/308.png";
        }


        else if(code == 701) {
            app.style.backgroundImage = `url(./Images/mist.jpg)`;

            btn.style.background = "#e5ba92";
            icon.src = "./icons/248.png";
        }

        else if(code == 741) {
            app.style.backgroundImage = `url(./Images/fog.jpg)`;

            btn.style.background = "#e5ba92";
            icon.src = "./icons/143.png";
        }

        else {
            app.style.backgroundImage = `url(./Images/clear.jpg)`;
            btn.style.background = "#4d72aa";
            icon.src = "./icons/116.png";
        }

        app.style.opacity = "1";
    })

    .catch(() => {
        alert("please try again, City not found or Remove any Spaces in the search");
        app.style.opacity = "1";
    });
}

fetchWeatherData();
app.style.opacity = "1";
