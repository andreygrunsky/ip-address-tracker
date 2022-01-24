import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kcmV5Z3J1bnNreSIsImEiOiJja3lzb3NlYnowb295Mm9xYWpkY3lmczY1In0.0lwJMzb1aNXRm994zVkyWQ',
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Andrey Grunsky</a>.',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
}
