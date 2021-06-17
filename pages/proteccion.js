import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';

class Proteccion extends React.Component {

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
                    <h1 style={{marginTop: 20}}>Protección de datos</h1>
                        <p>
                        GeoExplore está especialmente sensibilizada en la protección de los datos de los USUARIOS de los servicios a los que se accede a través de su web. 
                        Mediante la presente Política de Privacidad (en adelante , la Política) LA (VUESTRA EMPRESA) informa a los USUARIOS del sitio web: (VUESTROS DATOS)del 
                        tratamiento y usos a los que se someten los datos de carácter personal que se recaban en la web, con el fin de que decidan, libre y voluntariamente, 
                        si desean facilitar la información solicitada.
                        </p>
                        <p>
                        GeoExplore se reserva la facultad de modificar esta Política con el objeto de adaptarla a novedades legislativas, 
                        criterios jurisprudenciales, prácticas del sector, o intereses de la entidad. Cualquier modificación en la misma será anunciada con la debida antelación, 
                        a fin de que tengas perfecto conocimiento de su contenido.
                        </p>
                        <p>
                        Ciertos servicios prestados en el portal pueden contener condiciones particulares con previsiones en materia de protección de Datos Personales. 
                        De ellos puedes informarte en los correspondientes apartados.
                        </p>

                        <h2>Titularidad del tratamiento</h2>
                        <p>
                        En dichos supuestos, los datos recabados por GeoExplore serán incorporados a ficheros titularidad de GeoExplore, 
                        debidamente inscritos en el Registro General de Protección de Datos.
                        </p>

                        <h2>Usos y finalidades</h2>
                        <p>
                        La finalidad de la recogida y tratamiento de los datos personales es la gestión, 
                        prestación y personalización de los servicios y contenidos del mismo que el usuario utilice y de la cual se informará en cada apartado.
                        </p>

                        <h2>Comunicación de los datos</h2>
                        <p>
                        Los datos recabados a través de la web sólo serán cedidos en aquellos casos en que expresamente se informe de ello al usuario.
                        </p>
                    </div>
                <Footer conBottom={false}/>
            </div>
        );
      }  
}

export default Proteccion;
