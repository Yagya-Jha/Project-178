let longitude = 77.4126;
let latitude = 23.2599;
mapboxgl.accessToken = "pk.eyJ1Ijoia2lyYW4zMDMiLCJhIjoiY2w4c3BhZDQ2MDhlZzNuc3lmcmZ6bjhtZCJ9.TCumMD4Cq2WzVUQrq4oCkw";
let map = new mapboxgl.Map({
    container: "map",
    center: [longitude, latitude],
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 4,
});



function addMarkerOnMap(id, loc){
    var img = document.querySelector(id);
    var marker1 = new mapboxgl.Marker({
        element: img
    })
    .setLngLat(loc)
    .addTo(map)
}

addMarkerOnMap("#IndiaGate", [77.2295, 28.6129]);
addMarkerOnMap("#AmberPalace", [75.8513, 26.9855]);
addMarkerOnMap("#GateWayOfIndia", [72.8347, 18.9220]);
addMarkerOnMap("#LotusTemple", [77.2588, 28.5535]);
addMarkerOnMap("#VictoriaMemorial", [88.3426, 22.5448]);
addMarkerOnMap("#TajMahal", [78.0421, 27.1751]);
addMarkerOnMap("#QutubMinar", [77.1855, 28.5245]);
addMarkerOnMap("#CharMinar", [78.4747, 17.3616]);
addMarkerOnMap("#SanchiStupa", [77.7399, 23.4810]);
addMarkerOnMap("#HawaMahal", [75.8267, 26.9239]);
addMarkerOnMap("#Konark", [86.0945, 19.8876]);
addMarkerOnMap("#Unity", [73.7191, 21.8380]);


map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
);