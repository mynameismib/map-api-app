    const token = 'pk.eyJ1IjoibXluYW1laXNtaWIiLCJhIjoiY2xva2lpOGJkMjNwdDJrcDllaXZ0NjNnaCJ9.fkh29UJtY-VdhPdx-dJmhw'
  
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

  function successLocation(possition){
    console.log(possition);
    setupMap([possition.coords.longitude, possition.coords.latitude])
  }

  function errorLocation(){
    setupMap([44.43, 26.10])
  }

  function setupMap(center){
    mapboxgl.accessToken = token
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 16,

  });

  const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: token,
  });
  

  map.addControl(directions, 'top-left');

}