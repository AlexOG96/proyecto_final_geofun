import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';

class Privacidad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      
    }

    render() {
    
        return (
            <div>
                <Header/>
                    <div style={{fontSize: 18, width: '50%', marginLeft: '25%', marginBottom: 40}}>
                        <h1 style={{marginTop: 20}}>Política de privacidad</h1>
                        <p>
                            GeoExplore te informa sobre su Política de Privacidad respecto del tratamiento y 
                            protección de los datos de carácter personal de los usuarios y clientes que puedan 
                            ser recabados por la navegación o contratación de servicios a través del sitio Web GeoExplore.
                        </p>
                        <p>
                            En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales,
                            reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). 
                            Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas 
                            físicas (RGPD).
                        </p>
                        <p>
                            El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.
                        </p>

                        <h2>Identidad del responsable</h2>
                        <ul>
                            <li>Titular: GeoExplore S.L.</li>
                            <li>NIF/CIF: 11223344</li>
                            <li>Domicilio: C/Prueba - 2</li>
                            <li>Correo electrónico: sylux@hotmail.es</li>
                            <li>Sitio Web: GeoExplore</li>
                        </ul>

                        <h2>Finalidad del tratamiento de datos personales</h2>
                        <p>
                            Cuando te conectas al sitio Web para mandar un correo al Titular, te suscribes a su boletín o realizas una contratación,
                            estás facilitando información de carácter personal de la que el responsable es el Titular. 
                            Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, 
                            dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, 
                            das tu consentimiento para que tu información sea recopilada, utilizada, gestionada y almacenada por superadmin.es , 
                            sólo como se describe en el Aviso Legal y en la presente Política de Privacidad.
                        </p>
                    </div>
                <Footer conBottom={false}/>
            </div>
        );
      }  
}

export default Privacidad;
