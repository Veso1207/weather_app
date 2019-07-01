
//api key
const key = 'tHAcWCIhooQDIfGoAyOCaHuhNXezGJKg';
// get city function
const getCity = async(city) =>{

  const resource ='http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(resource + query);
  const data = await response.json();
  return data[0];
};
// get weather function
const getWeather = async(locationKey) =>{

  const resource = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query =`${locationKey}?apikey=${key}`;

  const response = await fetch(resource + query);
  const data = await response.json();

  return data[0];

};
