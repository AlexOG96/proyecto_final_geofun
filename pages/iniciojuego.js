import React from 'react';
//import ReactDOM from 'react-dom';
import Header from '../components/header'
import Vistamapa from '../components/vistamapa'
import { Button, Col, Divider, InputNumber, Row, Switch, Select } from 'antd';
import datosSv from './streetviewsjerez.json'
import Footer from '../components/footer';

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
          leyendaMapa: 'ckpwtwxaq3g8a17logxd95ay8',
          lngRandom: '',
          latRandom: '',
          tiempoElegido: 5,
          temporizadorElegido: false
        };
    }

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
            <h1 style={{fontSize: 40, textAlign: 'center', marginTop: 30}}>Explora Jerez</h1>
            <div style={{border: 'solid', borderColor: '#1890ff', borderWidth: 10, borderRadius: 10, width: '40%', 
            marginLeft: '30%', height: 400, marginTop: 10, marginBottom: 40, padding: 20 }}>
              <div style={{display: 'flex', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                <Button type='primary' shape='round' size='large' onClick={() => this.handleJuego()}>Iniciar juego</Button> 
              </div>
              <Divider/>
              <h1 style={{textAlign: 'center', marginBottom: 30}}>Personalizar configuración</h1>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <span style={{fontSize: 18, marginRight: 10}}>Movimiento permitido</span> 
                    <Switch style={{marginRight: 10, marginTop: 5}} onChange={() => this.handleMovimiento()} defaultChecked/>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                    <span style={{fontSize: 18, marginRight: 10, marginLeft: 10}}>Leyenda mapa</span>  
                    <Select id="seleccionLeyenda" value={this.state.valor} style={{ width: 200 }} onChange={(e) => this.handleLeyendaMapa(e)} 
                      defaultValue="ckpwtwxaq3g8a17logxd95ay8">
                            <Option value="ckpwtwxaq3g8a17logxd95ay8">Por defecto</Option>
                            <Option value="ckpwv4ix086aj18pses2c2nmp">Sin nombre de calles</Option>
                            <Option value="ckpwv9n5u0clo17qq77jthyuz">Sin nada</Option>
                        </Select>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                    <span style={{fontSize: 18, marginRight: 10}}>Temporizador (minutos)</span> 
                    <Switch style={{marginRight: 10, marginTop: 5}} onChange={() => this.handleInputTiempo()}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                    {this.state.temporizadorElegido && <InputNumber style={{marginLeft: 10}} keyboard={false} min={1} max={15} 
                    defaultValue={this.state.tiempoElegido} onChange={(e) => this.handleTiempo(e)}/>}
                  </div>
                  {/*}
                  Dificultad <Select id="seleccionLeyenda" value={this.state.valor} style={{ width: 150 }}>
                                  <Option value="ckpwtwxaq3g8a17logxd95ay8">Fácil</Option>
                                  <Option value="ckpwv4ix086aj18pses2c2nmp">Normal</Option>
                                  <Option value="ckpwv9n5u0clo17qq77jthyuz">Difícil</Option>
                                  <Option value="ckpwv9n5u0clo17qq77jthyuz">Extremo</Option>
                  </Select>
                  */}
            </div>
            <Footer conBottom={true}/>
          </div>
          :
          <div>  
            {//<Vistasv opcionespanorama={streetViewPanoramaOptions}/> 
            }
            <div>
              <Vistamapa lat={36.6990083} lng={-6.1426853} pulsar={() => this.handlePrueba} leyendaMapa={this.state.leyendaMapa} 
              longitudRandom={this.state.lngRandom} latitudRandom={this.state.latRandom}
              tiempoHijo={this.state.tiempoElegido*60} minutosHijo={this.state.tiempoElegido} temporizadorOnHijo={this.state.temporizadorElegido}
              panorama={streetViewPanoramaOptions}
              />
            </div>
          </div>
          }
      </div>
          
    );
  }
}

export default Juego;