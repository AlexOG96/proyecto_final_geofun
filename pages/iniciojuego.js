import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Vistasv from '../components/vistasv'
import Vistamapa from '../components/vistamapa'
import dynamic from 'next/dynamic';
import { Button, InputNumber, Switch, Select } from 'antd';
import Link from 'next/link'
import datosSv from './streetviewsjerez.json'
//<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />

var streetViewPanoramaOptions = {
  position: {lat: 36.6929106, lng: -6.1111165},
  radius:10,
  pov: {heading: 100, pitch: 0},
  zoom: 1,
  clickToGo: true,
  showRoadLabels: false,
  addressControl: false,
  fullscreenControl: true,
  imageDateControl: false,
  linksControl: true
}



class Juego extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          estadoJuego: false,
          leyendaMapa: 'ckpwv9n5u0clo17qq77jthyuz',
          lngRandom: '',
          latRandom: '',
          tiempoElegido: 5,
          temporizadorElegido: false
        };
    }
    /*
    <Link href={`./juego`}>
                <Button type='primary'>Iniciar juego</Button>                   
            </Link>
      */
  handleJuego() {
    var rand = Math.floor(Math.random() * 47);
    
    streetViewPanoramaOptions.position = {lat: datosSv[rand].lat , lng: datosSv[rand].lng};
    this.setState({
      lngRandom: datosSv[rand].lng,
      latRandom: datosSv[rand].lat,
      estadoJuego: true
    })
    console.log(this.state.tiempoElegido)
  }

  handleLeyendaMapa(value) {
    this.setState({
        leyendaMapa: value
    })
  }

  handleDificultad(value) {
  }

  handleMovimiento() {
    streetViewPanoramaOptions.clickToGo = streetViewPanoramaOptions.clickToGo ? false : true;
    streetViewPanoramaOptions.linksControl = streetViewPanoramaOptions.linksControl ? false : true;
  }

  handleTiempo(value) {
    this.setState({
      tiempoElegido: value
  })
  }

  handleInputTiempo() {
      this.setState({
        temporizadorElegido: this.state.temporizadorElegido ? false : true
    })
  }
  
  render() {
    const { Option } = Select;
    return (
        
      <div>
        
          {this.state.estadoJuego === false ?
          <div>
            <Header/>
            <div style={{/*display: 'flex', justifyContent: 'center', marginTop: 200*/}}>
                 Movimiento permitido <Switch onChange={() => this.handleMovimiento()} defaultChecked/>
                 Leyenda mapa <Select id="seleccionLeyenda" value={this.state.valor} style={{ width: 150 }} onChange={(e) => this.handleLeyendaMapa(e)}>
                                  <Option value="ckpwtwxaq3g8a17logxd95ay8">Por defecto</Option>
                                  <Option value="ckpwv4ix086aj18pses2c2nmp">Sin nombre de calles</Option>
                                  <Option value="ckpwv9n5u0clo17qq77jthyuz">Sin nada</Option>
                  </Select>
                 Temporizador <Switch onChange={() => this.handleInputTiempo()}/>
                  {this.state.temporizadorElegido && <InputNumber keyboard={false} min={1} max={15} defaultValue={this.state.tiempoElegido} onChange={(e) => this.handleTiempo(e)}/>}
                  {this.state.temporizadorElegido && ' minutos'}
                  Dificultad <Select id="seleccionLeyenda" value={this.state.valor} style={{ width: 150 }}>
                                  <Option value="ckpwtwxaq3g8a17logxd95ay8">Fácil</Option>
                                  <Option value="ckpwv4ix086aj18pses2c2nmp">Normal</Option>
                                  <Option value="ckpwv9n5u0clo17qq77jthyuz">Difícil</Option>
                                  <Option value="ckpwv9n5u0clo17qq77jthyuz">Extremo</Option>
                  </Select>
                  <Button type='primary' onClick={() => this.handleJuego()}>Iniciar juego</Button> 
            </div>
          </div>
          :
          <div>  
          <Vistasv opcionespanorama={streetViewPanoramaOptions}/>
          <div>
            <Vistamapa lat={36.6990083} lng={-6.1426853} pulsar={() => this.handlePrueba} leyendaMapa={this.state.leyendaMapa} 
            longitudRandom={this.state.lngRandom} latitudRandom={this.state.latRandom}
            tiempoHijo={this.state.tiempoElegido*60} minutosHijo={this.state.tiempoElegido} temporizadorOnHijo={this.state.temporizadorElegido}
            />
          </div>
          </div>
          }
      </div>
          
    );
  }
}

export default Juego;