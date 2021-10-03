let button = document.getElementById("button");
let inputValue = document.getElementById("inputValue");
let cityName = document.getElementById("name");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3b255a10290a4d93c9b23dedfdba66ac')
.then(response => response.json())
.then(data => {
    let nameValue = data['name'];
    let tempTemp = +((data['main']['temp']) - 273.15);
    let tempValue = tempTemp.toFixed(2) + '°C';
    let descValue = data['weather'][0]['description'];
    
    cityName.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

.catch(err => alert('Wrong city name'))
})
