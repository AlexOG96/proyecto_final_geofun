import React from 'react';
//import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
//import ReactStreetview from 'react-streetview';

//var streetViewService = new google.maps.StreetViewService();
var radius = 10;
var resultado = '';

//streetViewService.getPanoramaByLocation({lat: 36.6716311 , lng: -6.1296242}, radius, handler);
/*
function handler(data, status) {
    if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;              
        resultado = nearStreetViewLocation
    } else {
        radius += 50;
        streetViewService.getPanoramaByLocation({lat: 36.6716311 , lng: -6.1296242}, radius, handler);
    }
}; 
*/
class PruebaRandom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          estadoJuego: false
        };
    }
    
    componentDidMount() {
     // handler();
      //console.log('ey',resultado);
    }

  render() {
    
    
    return (
        
      <div>
      </div>
    );
  }
}

export default PruebaRandom;