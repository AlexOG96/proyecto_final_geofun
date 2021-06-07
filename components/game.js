import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import Streetview from 'react-streetview';
import { Button } from 'antd';
import getDistance from 'geolib/es/getDistance';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVucmlyOTYiLCJhIjoiY2tuZzRjZ25iMjdjczJwbGN5aml4MmEwYyJ9.bxWvaok_5Z_ql5Z5tTnKag';
var coordenadaMarcadaLat = '';
var coordenadaMarcadaLng = '';
const streetViewPanoramaOptions = {
  position: {lat: 36.6716311, lng: -6.1296242},
  radius:100,
  pov: {heading: 100, pitch: 0},
  zoom: 1,
  clickToGo: true,
  fullscreenControl:false,
  showRoadLabels: false,
  addressControl: false
};

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          lng: -6.116667,
          lat: 36.7,
          zoom: 11,
          estadoJuego: false,
          sitioMarcado: '',
          latMarcada: 0,
          lngMarcada: 0,
          posicionInicial: '',
          prediccionRealizada: false,
          resultado: 'Sin realizar predicción'
          };
          
         this.mapContainer = React.createRef();
    }

    handleGame() {
        this.setState({
            estadoJuego: true
        })
    }

      componentDidMount() {
        
        this.posicionInicial = {lat: 36.7, lng: -6.116667}
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
        
          map.on('click', function(e) {
    
              
              var coordinates = e.lngLat
              coordenadaMarcadaLat = e.lngLat.lat;
              coordenadaMarcadaLng = e.lngLat.lng;
              new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('you clicked here: <br/>' + coordinates)
                .addTo(map);
          })
        
        map.on('mouseenter', 'clusters', () => {
            map.getCanvas().style.cursor = 'pointer'
          })
        map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = ''
        })

      }
      
      /*
      posicionCambiada(lat) {
        this.setState({
          sitioMarcado: lat
      })
          console.log('hola', this.sitioMarcado);
      }
      */

      calculoFinal() {

        let distanciaFinal = getDistance(
          { latitude: coordenadaMarcadaLat, longitude: coordenadaMarcadaLng},
          { latitude: 36.6716311, longitude: -6.1296242})
        console.log('Resultado: ', distanciaFinal)
        this.setState({
          resultado: distanciaFinal + ' metros'
        })
      }


  render() {
    console.log(this.posicionInicial)
   

    return (
        
        <div>
            <div>
              <div  style={{marginTop: 20, height: 500, width: 1000, border: 'solid', borderColor: '#1890ff', borderWidth: 10, borderRadius: 10}} 
                ref={this.mapContainer} className="map-container"/>
            </div>
            <Streetview 
                apiKey={'AIzaSyDlHJEzjw5cJBiw6-6R-0s2pd55sf_0W08'}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
                onPositionChanged={(e) => this.posicionCambiada(e)}
            />

            <Button onClick={() => this.calculoFinal()} style={{marginTop: 50, marginBottom: 50}}>Realizar predicción</Button>
            <div style={{marginBottom: 50}}>
              <h2>Resultado: {this.state.resultado}</h2>
            </div>
        </div>
    );
  }
}

export default Game;