import React from 'react';
import Header from '../components/header'
import { Button } from 'antd';
import Footer from '../components/footer';
import Link from 'next/link'

var alturaVentana = '';
if (typeof window !== "undefined") {
  alturaVentana = window.innerHeight;
}

class Index extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        funciona: false
      };
    
  }
  render() {
    
    return (
      
      <div style={{height: alturaVentana}}>
        <head>
        </head>
        <Header/>
        <div style={{fontSize: 18, width: '50%', marginLeft: '25%', marginBottom: 40, textAlign: 'center', marginTop: 20}}>
          <h1>Bienvenido a GeoExplore</h1>
          <p>En esta web podrás jugar a un juego en el que se te dará una StreetView aleatoria de la ciudad de Jerez y tendrás que marcar en el mapa el lugar donde crees que estás.</p>
          <p>Para añadirle dificultad, puedes personalizar algunas características del juego.</p>
          <h3>¡Espero que disfrutes!</h3>
          <Link href={`./iniciojuego`}><Button type='primary' shape='round' size='large'>Ir al juego</Button></Link>
        </div>
        <Footer conBottom={true}/>
      </div>
    );
  }
}

export default Index;
