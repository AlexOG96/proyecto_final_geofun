import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVucmlyOTYiLCJhIjoiY2tuZzRjZ25iMjdjczJwbGN5aml4MmEwYyJ9.bxWvaok_5Z_ql5Z5tTnKag';



class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          lng: -6.116667,
          lat: 36.7,
          zoom: 11
          };
          this.mapContainer = React.createRef();
    }

    componentDidMount() {
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
    const { lng, lat, zoom } = this.state;
    
    return (
        <div>
          <div style={{marginTop: 20, height: 500, width: 1000, border: 'solid', borderColor: '#1890ff', borderWidth: 10, borderRadius: 10}} ref={this.mapContainer} className="map-container" />
        </div>
    );
  }
}

export default Map;