var map = L.map('map').setView([51.505, -0.09], 13);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OSM'
}).addTo(map);

var wmsLayer01 = L.tileLayer.wms('http://localhost:8080/geoserver/webGisproj01/wms', {
    layers: 'webGisproj01:Ostan',
    format: 'image/png',
    transparent: true
}).addTo(map);

var wmsLayer02 = L.tileLayer.wms('http://localhost:8080/geoserver/webGisproj01/wms', {
    layers: 'webGisproj01:Roads',
    format: 'image/png',
    transparent: true
}).addTo(map);

var baseLayers = { "OpenStreetMap": osmLayer };
var overlayLayers = { "Ostan_IR": wmsLayer01, "Roads_IR": wmsLayer02 };

L.control.layers(baseLayers, overlayLayers).addTo(map);
