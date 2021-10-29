const url = "https://api.openweathermap.org/data/2.5/";
const key = "5269485d20180ba618280f38a6f368b5";
var check = document.querySelector(".check");
console.log(check)
const setQuery = (e) => {
    if (e.keyCode == '13') { //burası basılan değer enter demektir
        getResult(searchBar.value)
    }


}
const getResult = (cityName) => {
    var query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query).then(weather => {
        return weather.json()
    }).then(displayResult)




}
const displayResult = (weather) => {
    var city = document.querySelector(".city");
    var temp = document.querySelector(".temp");
    var desc = document.querySelector(".desc");
    var minmax = document.querySelector(".minmax");


    city.innerText = `${weather.name} , ${weather.sys.country}`;
    temp.innerText = `${Math.round(weather.main.temp)} °C`;
    // desc edit
    var descEdit = weather.weather[0].description;
    descEdit = descEdit[0].toUpperCase() + descEdit.substring(1);

    desc.innerHTML = `${descEdit}`;
    minmax.innerText = `${Math.round(weather.main.temp_min)} °C / ${Math.round(weather.main.temp_max)} °C`;

    console.log(weather)
}

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keypress", setQuery);
check.addEventListener("click", () => {
    getResult(searchBar.value);
});