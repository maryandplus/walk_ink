
var mapthree = L.map('mapthree').setView([ 37.9876,23.7416], 14);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {

 maxZoom: 18,

minZoom:13,

    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 

    opacity: 0.4,
    

}).addTo(mapthree);

L.control.scale().addTo(mapthree);


var wmsLayer1 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:viomix_topio',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer2 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:kipoi',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer3 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:diskadika',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer4 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:skalia',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer5 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:stoes',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer6 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:cinema',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer7 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:tsiler',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);


var wmsLayer8 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:dentra',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);


var wmsLayer9 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:upaithriatheatra',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer10 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:agores',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);

var wmsLayer11 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:paixnidia',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(mapthree);
/*
//geitonies
ena.onclick=function() {
    map.flyTo([37.9664,23.6937],15);
}

dyo.onclick=function() {
    map.flyTo([37.98388,23.72723],18);
}


tria.onclick=function() {
    map.flyTo([37.9783,23.7268],16);
}

tessera.onclick=function() {
    map.flyTo([37.9808,23.7145],16);
}
pente.onclick=function() {
    map.flyTo([37.9734,23.7219],16);
}
eksi.onclick=function() {
    map.flyTo([37.9786,23.7465],16);
}
epta.onclick=function() {
    map.flyTo([37.98741,23.73361],17);
} */
/////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////
//thematikes

enaaa.onclick=function() {
    mapthree.flyTo([37.9765,23.7156],15);
     map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
      map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer1.setOpacity(1);
      wmsLayer1.addTo(map);
}

dyooo.onclick=function() {
    mapthree.flyTo([37.9815,23.7317],15);
      map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer2.setOpacity(1);
         wmsLayer2.addTo(map);
}


triaaa.onclick=function() {
    mapthree.flyTo([37.9754,23.7269],16);
     map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer3.setOpacity(1);
      wmsLayer3.addTo(map);
}

tesseraaa.onclick=function() {
    mapthree.flyTo([37.9831,23.7391],15);
     map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer4.setOpacity(1);
     wmsLayer4.addTo(map);

}

penteee.onclick=function() {
    mapthree.flyTo([37.9816,23.7306],17);
  map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer5.setOpacity(1);
      wmsLayer5.addTo(map);
}

eksiii.onclick=function() {
    mapthree.flyTo([37.97394,23.73378],15);
  map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer7);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer6.setOpacity(1);
      wmsLayer6.addTo(map);
}

eptaaa.onclick=function() {
    mapthree.flyTo([37.9819,23.7314],16);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer7.setOpacity(1);
      wmsLayer7.addTo(map);
}

oktooo.onclick=function() {
    mapthree.flyTo([37.97798,23.72818],17);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
       map.removeLayer(wmsLayer7);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer8.setOpacity(1);
      wmsLayer8.addTo(map);
}

enniaaa.onclick=function() {
    mapthree.flyTo([37.9815,23.7315],15);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer7);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer11);

      wmsLayer9.setOpacity(1);
      wmsLayer9.addTo(map);
}

dekaaa.onclick=function() {
    mapthree.flyTo([37.9783,23.7269],16);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer7);
      map.removeLayer(wmsLayer11);

      wmsLayer10.setOpacity(1);
     wmsLayer10.addTo(map);
}

entekaaa.onclick=function() {
    mapthree.flyTo([37.9934,23.7324],15);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
       map.removeLayer(wmsLayer8);
      map.removeLayer(wmsLayer9);
      map.removeLayer(wmsLayer10);
      map.removeLayer(wmsLayer7);

      wmsLayer11.setOpacity(1);
      wmsLayer11.addTo(map);
}




