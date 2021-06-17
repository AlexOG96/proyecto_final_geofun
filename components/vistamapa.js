import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button, Modal, notification } from 'antd';
import getDistance from 'geolib/es/getDistance';
import Vistamapafinal from '../components/mapafinal'
import Vistasv from '../components/vistasv'
import { FlagOutlined } from '@ant-design/icons';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVucmlyOTYiLCJhIjoiY2tuZzRjZ25iMjdjczJwbGN5aml4MmEwYyJ9.bxWvaok_5Z_ql5Z5tTnKag';
var marcador = '';
var marcadorFinal = '';
var coordenadaMarcadaLat = '';
var coordenadaMarcadaLng = '';
var interval = '';

class Vistamapa extends React.Component {
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
            resultado: 'Sin realizar predicción',
            modalVisible: false,
            altura: 280,
            anchura: 420,
            primerClick: true,
            longitudTomada: this.props.longitudRandom,
            latitudTomada: this.props.latitudRandom,
            leyendaMapa: this.props.leyendaMapa,
            tiempo: this.props.tiempoHijo,
            minutos: this.props.minutosHijo,
            segundos: 0,
            temporizadorOn: this.props.temporizadorOnHijo,
            streetViewPanoramaOptions: this.props.panorama,
            mostrarSv: true,
            limiteUsosInicio: 0
            };
            
           this.contenedor1 = React.createRef();
    }

    componentDidMount() {
        
        this.posicionInicial = {lat: 36.7, lng: -6.116667}
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
          container: this.contenedor1.current,
          style: 'mapbox://styles/fenrir96/'+ this.state.leyendaMapa,
          center: [lng, lat],
          zoom: zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.getCanvas().style.cursor = 'crosshair';
        
        map.on('click', function(e) {
            if (marcador !== '') {
                marcador.remove();
            }
            var coordinates = e.lngLat
            coordenadaMarcadaLat = e.lngLat.lat;
            coordenadaMarcadaLng = e.lngLat.lng;
            marcador= new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        })
        if (this.state.temporizadorOn){
          this.temporizador();
        }
      }

      openNotification() {
        notification['warning']({
          message: '¡Te queda un solo uso de volver al inicio!'
        });
      };

      handleDisabled() {
        this.setState({
            primerClick: false,
            prediccionRealizada: true
        })
      }

      calculoFinal() {
        clearInterval(interval);
        let distanciaFinal = getDistance(
          { latitude: coordenadaMarcadaLat, longitude: coordenadaMarcadaLng},
          { latitude: this.state.latitudTomada, longitude: this.state.longitudTomada})
        this.setState({
          resultado: distanciaFinal + ' metros',
          modalVisible: true,
        })
      }

      temporizador() {
         interval = setInterval(() => {
          this.setState({
            tiempo: this.state.tiempo-1
          }) 
          if (this.state.segundos === 0) {
            this.setState({
              segundos: 59,
              minutos: this.state.minutos-1
            }) 
          }
          else {
            this.setState({
              segundos: this.state.segundos-1
            }) 
          }
          if (this.state.tiempo === 0) {
            this.calculoFinal();
            clearInterval(interval);
          }
        }, 1000);
        
      } 

      volverInicio() { 
        if (this.state.mostrarSv) {
          this.setState({
            mostrarSv: false,
            limiteUsosInicio: this.state.limiteUsosInicio+1
          })
        }
        else {
          this.setState({
            mostrarSv: true,
            limiteUsosInicio: this.state.limiteUsosInicio+1
          })
        }
        if (this.state.limiteUsosInicio === 12) {
          this.openNotification();
        }
      }
      
    render() {
        return(
            <div>  
              <div style={{ position:'fixed', zIndex: 100, width: this.state.anchura, marginTop: 20}}>
                <div style={{backgroundColor: 'white', width: '20%', fontSize: 20, textAlign: 'center', 
                  marginLeft: '45%', borderRadius: 10, backgroundColor: '#008CFF', color: 'white', display: this.state.temporizadorOn === false && 'none'}}>
                    {this.state.minutos < 10 && '0'}{this.state.minutos}:{this.state.segundos < 10 && '0'}{this.state.segundos}
                </div>
                <div  style={{marginTop: 10, height: this.state.altura, width: this.state.anchura, borderRadius: 10, marginLeft: 20}} 
                      ref={this.contenedor1} className="map-container"
                      onClick={() => this.handleDisabled()}/>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                  {this.state.primerClick ?
                    <Button style={{marginRight: 5}} type='primary' shape='round' disabled>Confirmar selección</Button>
                  :
                    <Button style={{marginRight: 5}} type='primary' shape='round' onClick={() => this.calculoFinal()}>Confirmar selección</Button>
                  }
                  {this.state.limiteUsosInicio > 13 ?
                    <Button style={{marginLeft: 5}} type='primary' shape='circle' disabled><FlagOutlined /></Button>
                    :
                    <Button style={{marginLeft: 5}} type='primary' shape='circle' onClick={() => this.volverInicio()}><FlagOutlined /></Button>
                  }
                </div>
              </div>
              {this.state.mostrarSv &&
                  <Vistasv opcionespanorama={this.state.streetViewPanoramaOptions}/> 
                }
                {this.state.mostrarSv === false &&
                  <Vistasv opcionespanorama={this.state.streetViewPanoramaOptions}/> 
                }
                  <h2 style={{float: 'right', display: this.state.temporizadorOn === false && 'none'}}>
                    Tiempo restante: {this.state.minutos < 10 && '0'}{this.state.minutos}:{this.state.segundos < 10 && '0'}{this.state.segundos}
                  </h2>

                  <Modal visible={this.state.modalVisible} bodyStyle={{height: 'auto', width: 500, borderRadius: 8}} closable={false} cancelButtonProps={{ style: { display: 'none' } }}
                      okButtonProps={{ style: { display: 'none' } }}>
                        <h2 style={{textAlign: 'center'}}>{this.state.prediccionRealizada ? 'Te has aproximado '+this.state.resultado : 'No realizaste la predicción'}</h2>
                        <Vistamapafinal latReal={this.state.latitudTomada} lngReal={this.state.longitudTomada} 
                        latPrediccion={coordenadaMarcadaLat} lngPrediccion={coordenadaMarcadaLng} prediccionRealizada={this.state.prediccionRealizada}/>
                      <div style={{marginTop: 15, display: 'flex', justifyContent: 'center'}}>
                        <a href={`./iniciojuego`}>
                            <Button type='primary' shape='round'>Volver a jugar</Button>                   
                        </a>
                      </div> 
                  </Modal>
                </div>
                  
            
        );
    }
}

//estilos
export default Vistamapa;