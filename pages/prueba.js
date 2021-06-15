import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Game from '../components/game'
import Streetview from 'react-streetview';
import dynamic from 'next/dynamic';
import { Button } from 'antd';
//<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />

class Prueba extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleGame() {
      
      this.setState({
          estadoJuego: true
      })
  }

  

  render() {

    return (
        
      <div>
        <Header/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Game/>
            <div>
            </div>
          </div>
      </div>
    );
  }
}

export default Prueba;