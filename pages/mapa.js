import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Map from '../components/map'
import dynamic from 'next/dynamic';
//<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />




class Mapa extends React.Component {

    constructor(props) {
        super(props);
    }

  

  render() {

    return (
        
      <div>
        <Header titulo="mapa"/>
        <Map/>
      </div>
    );
  }
}

export default Mapa;