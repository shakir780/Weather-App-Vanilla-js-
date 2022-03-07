
const api={
    key:"e10a1184ffc9fd4cf2179113d5782e0b",
    base:"https://api.openweathermap.org/data/2.5/"
}
const search=document.querySelector('.Search');
const btn=document.querySelector(".btn");
btn.addEventListener("click",getInput);

function getInput(event){
    event.preventDefault();
    if(event.type == "click"){
        getData(search.value);
        console.log(search.value);
    }

}
function getData(){
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)

.then(response =>{
    //convert it to Json
    return response.json();
    //then display the data
}).then(displayData);


}
function displayData(response){
console.log(response);
if(response.cod === "404"){
    const error=document.querySelector('.error');
   error.innerHTML="Omo the country no dey o";
   const city= document.querySelector('.city');
    city.innerText="";
    const date=document.querySelector('.date');
    const today=new Date();
    date.innerText="";
    const temp=document.querySelector('.temp')
    temp.innerHTML= " "
    const feels=document.querySelector('.feels')
    feels.innerHTML="";
    const weather=document.querySelector('.weather')
weather.innerText=""
const tempRange=document.querySelector('.temp-range');
   tempRange.innerText="";
}

else{
    const error=document.querySelector('.error');
    error.innerHTML=" ";
    const city= document.querySelector('.city');
    city.innerText=`${response.name},${response.sys.country}`;
    const date=document.querySelector('.date');
    const today=new Date();
    date.innerText=dateFunction(today);
    const temp=document.querySelector('.temp')
    temp.innerHTML=`Temp: ${Math.round(response.main.temp)}°C `
    const feels=document.querySelector('.feels')
    feels.innerHTML=`Feels like:${Math.round(response.main.feels_like)}°C`
const weather=document.querySelector('.weather')
weather.innerText=`Weather:${response.weather[0].main}`
const tempRange=document.querySelector('.temp-range');
   tempRange.innerText=`Temp Range:${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)} °C `;

   const weatherIcon=document.querySelector('.weather-icon');
const iconUrl="http://openweathermap.org/img/w/"
weatherIcon.src=iconUrl + response.weather[0].icon +".png";



}


}

function dateFunction(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
    }