
const form = document.querySelector('form');
const card =document.querySelector('.card');
const display =document.querySelector('.details');
const img =document.querySelector('.img');
const icon =document.querySelector('.icon');


//function that updates UI

const updateUI = (data) =>{

  const cityName =data.cityName;
  const weather =data.weather;

// html template
  display.innerHTML=`
     <h5 class="my-3">${cityName.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;


 if(card.classList.contains('d-none')){
   card.classList.remove('d-none');
 };
// change pic for a card
 weather.IsDayTime ? img.setAttribute('src','img/day_img.jpg'):img.setAttribute('src','img/night_img.jpg');


//change icon for weather
 icon.innerHTML=`<img src='img/icons/${weather.WeatherIcon}.svg' >`


};




//async function that gets city and weather details
const updateCity= async(city) =>{

 const cityName = await getCity(city);
 const weather = await getWeather(cityName.Key);
 return {cityName,weather};


}


form.addEventListener('submit',e =>{


  e.preventDefault();
  const cityName= form.city.value.trim();
  form.reset();
  updateCity(cityName).then(data =>updateUI(data)).catch(err =>console.log(err));

});