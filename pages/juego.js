import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Game from '../components/game'
import dynamic from 'next/dynamic';
import { Button } from 'antd';
//<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />

class Juego extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          estadoJuego: false
        };
    }

    

  

  render() {

    return (
        
      <div>
            <Game/>
         
      </div>
    );
  }
}

export default Juego;