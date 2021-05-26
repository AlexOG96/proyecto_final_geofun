import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Game from '../components/game'
import dynamic from 'next/dynamic';
//<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />




class Juego extends React.Component {

    constructor(props) {
        super(props);
    }

  

  render() {

    return (
        
      <div>
        <Header/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Game/>
        </div>
      </div>
    );
  }
}

export default Juego;