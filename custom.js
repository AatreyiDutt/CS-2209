// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoiYWF0cmV5aWR1dHQiLCJhIjoiY2wyNG52cmcxMjF5NzNjcDZob3VkYXpjbiJ9.T5P5CysazB1XMUPjKX9Kiw';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aatreyidutt/cl2rdcs7f003i14mfihnmswkd', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 3 // starting zoom
  });
};
