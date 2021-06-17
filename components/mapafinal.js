import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVucmlyOTYiLCJhIjoiY2tuZzRjZ25iMjdjczJwbGN5aml4MmEwYyJ9.bxWvaok_5Z_ql5Z5tTnKag';
var marcadorReal = '';
var marcadorPrediccion = '';

class Vistamapafinal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           latPrediccion: this.props.latPrediccion,
           lngPrediccion: this.props.lngPrediccion,
           latReal: this.props.latReal,
           lngReal: this.props.lngReal,
           prediccionRealizada: this.props.prediccionRealizada
            };
           this.contenedor1 = React.createRef();
    }

    componentDidMount() {
        const coordenadasReales = [this.state.lngReal, this.state.latReal];
        const coordenadasPrediccion = [this.state.lngPrediccion, this.state.latPrediccion];
        const map = new mapboxgl.Map({
          container: this.contenedor1.current,
          style: 'mapbox://styles/fenrir96/ckpwtwxaq3g8a17logxd95ay8',
          center: [this.state.lngReal, this.state.latReal],
          zoom: 14
        });
        map.addControl(new mapboxgl.NavigationControl());
        var popup = new mapboxgl.Popup()
            .setText('¡Marcaste aquí!')
            .addTo(map);
        marcadorReal= new mapboxgl.Marker()
            .setLngLat(coordenadasReales)
            .addTo(map)
        if (this.state.prediccionRealizada) {
            marcadorPrediccion= new mapboxgl.Marker()
                .setLngLat(coordenadasPrediccion)
                .addTo(map)
                .setPopup(popup);

            map.on('load', function () {
                map.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                coordenadasReales,
                                coordenadasPrediccion
                            ]
                        }
                    }
                    });
                    map.addLayer({
                        'id': 'route',
                        'type': 'line',
                        'source': 'route',
                        'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                    'line-color': '#888',
                    'line-width': 4
                    }
                });
            });
        }
    }
      
    render() {
        return(
            <div>
                <div  style={{ height: 300}} 
                  ref={this.contenedor1} className="map-container"
                  />
            </div>
                  
            
        );
    }
}

//estilos
export default Vistamapafinal;