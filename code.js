var map = L.map('map').setView([ 37.98, 23.73], 13);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,

minZoom:13,

    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

opacity: 0.4,

}).addTo(map);


L.control.scale().addTo(map);


var wmsLayer1 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
   
    layers: 'poldiadromes:rouf_tavros',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer2 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:pl_omonoia',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer3 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:omonoia_syntagma_monastiraki',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer4 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:metaksourgeio_gkazi_kerameikos',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer5 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:koukaki_thiseio_petralona',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer6 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:kolonaki',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);

var wmsLayer7 = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'poldiadromes:eksarxeia',
    transparent: true,
    opacity:0,
    format: 'image/png'
}).addTo(map);


ena.onclick=function() {
    map.flyTo([37.9673,23.7019],15);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
    

        wmsLayer1.setOpacity(1);


     wmsLayer1.addTo(map);
}

dyo.onclick=function() {
    map.flyTo([37.98387,23.72798],18);
    map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
     
 wmsLayer2.setOpacity(1);
      wmsLayer2.addTo(map);
}


tria.onclick=function() {
    map.flyTo([37.9788,23.7290],16);
       map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
     
 wmsLayer3.setOpacity(1);
     wmsLayer3.addTo(map);
}

tessera.onclick=function() {
    map.flyTo([37.9808,23.7145],16);
    map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
      


 wmsLayer4.setOpacity(1);
      wmsLayer4.addTo(map);

}

pente.onclick=function() {
    map.flyTo([37.9722,23.7216],15);
    map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer7);
    

 wmsLayer5.setOpacity(1);
    wmsLayer5.addTo(map);
}

eksi.onclick=function() {
    map.flyTo([37.9786,23.7465],16);
    map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer3);
      map.removeLayer(wmsLayer7);
   



 wmsLayer6.setOpacity(1);
    wmsLayer6.addTo(map);
}


epta.onclick=function() {
    map.flyTo([37.98699,23.73411],17);
    map.removeLayer(wmsLayer1);
      map.removeLayer(wmsLayer2);
      map.removeLayer(wmsLayer4);
      map.removeLayer(wmsLayer5);
      map.removeLayer(wmsLayer6);
      map.removeLayer(wmsLayer3);
    


 wmsLayer7.setOpacity(1);
     wmsLayer7.addTo(map);
}


   // L.control.layers(baselayers, overlays, {position: 'topleft'}).addTo(map);

koumpi.onclick=function() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

