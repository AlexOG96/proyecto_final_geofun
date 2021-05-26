import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import Streetview from 'react-google-streetview';
import randomStreetView from 'random-streetview';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVucmlyOTYiLCJhIjoiY2tuZzRjZ25iMjdjczJwbGN5aml4MmEwYyJ9.bxWvaok_5Z_ql5Z5tTnKag';


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          lng: -6.116667,
          lat: 36.7,
          zoom: 11,
          locations:''
          };
          this.mapContainer = React.createRef();
    }

    
    

      componentDidMount() {
        const getRandomCor = async () => {
          const locations = await randomStreetView.getRandomLocations(3);
          const data = await locations.json();
          return data;
        }
        console.log('hola', getRandomCor())
        this.setState({
          locations: ''
        })
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
      }

  render() {
    
    const streetViewPanoramaOptions = {
      position: {lat: this.state.locations[1], lng: this.state.locations[0]},
      radius:100,
      pov: {heading: 100, pitch: 0},
      zoom: 1,
      clickToGo: true,
      fullscreenControl:false,
      showRoadLabels: false
    };
    return (
        <div>
          <div style={{marginTop: 20, height: 500, width: 1000, border: 'solid', borderColor: '#1890ff', borderWidth: 10, borderRadius: 10}} 
          ref={this.mapContainer} className="map-container" />
          <Streetview 
            apiKey={'AIzaSyDlHJEzjw5cJBiw6-6R-0s2pd55sf_0W08'}
            streetViewPanoramaOptions={streetViewPanoramaOptions}
          />
        </div>
    );
  }
}

export default Map;