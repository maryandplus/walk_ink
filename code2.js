
var maptwo = L.map('maptwo').setView([ 37.9876,23.7416], 15);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    maxZoom: 18,

minZoom:13,
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
opacity: 0.4,

}).addTo(maptwo);


L.control.scale().addTo(maptwo);

var wmsLayer1 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:vassofias',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer2 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:stadiou',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer3 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:patision',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer4 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:panepistimiou',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer5 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:fokinonosnegri',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer6 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:athinas',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);

var wmsLayer7 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:aleksandras',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(maptwo);
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
//dromoi
enaa.onclick=function() {
    maptwo.flyTo([37.9774,23.7500],15);
     map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);

      wmsLayer1.setOpacity(1);
      wmsLayer1.addTo(map);
}

dyoo.onclick=function() {
    maptwo.flyTo([37.9798,23.7334],16);
      map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);

      wmsLayer2.setOpacity(1);
         wmsLayer2.addTo(map);
}


triaa.onclick=function() {
    maptwo.flyTo([37.9928,23.7342],16);
     map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);

      wmsLayer3.setOpacity(1);
      wmsLayer3.addTo(map);
}

tesseraa.onclick=function() {
    maptwo.flyTo([37.9800,23.7336],16);
     map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);

      wmsLayer4.setOpacity(1);
      wmsLayer4.addTo(map);

}

pentee.onclick=function() {
    maptwo.flyTo([38.00141,23.73795],17);
  map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);

      wmsLayer5.setOpacity(1);
     wmsLayer5.addTo(map);
}

eksii.onclick=function() {
    maptwo.flyTo([37.9801,23.7285],16);
  map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer7);

      wmsLayer6.setOpacity(1);
      wmsLayer6.addTo(map);
}

eptaa.onclick=function() {
    maptwo.flyTo([37.9899,23.7449],15);
        map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);

      wmsLayer7.setOpacity(1);
      wmsLayer7.addTo(map);
}

koumpi.onclick=function() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}