import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';

class Terminos extends React.Component {

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
                    <h1 style={{marginTop: 20}}>Términos y condiciones de uso</h1>
                        <h2>Información relevante</h2>
                        <p>
                            Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, 
                            que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. 
                            El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso
                            en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas 
                            por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto,
                            será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.
                        </p>
                        <p>
                            El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, 
                            en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros 
                            productos. GeoExplore no asume la responsabilidad en caso de que entregue dicha clave a terceros.
                        </p>
                        <p>
                            Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un 
                            proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, 
                            validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago 
                            seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.
                        </p>

                        <h2>Licencia</h2>
                        <p>
                            GeoExplore a través de su sitio web concede una licencia para que los usuarios utilicen 
                            los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.
                        </p>

                        <h2>Uso no autorizado</h2>
                        <p>
                            En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación)
                            usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, 
                            sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.
                        </p>

                        <h2>Propiedad</h2>
                        <p>
                            Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. 
                            Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, 
                            nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  
                            responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, 
                            fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos. 
                        </p>
                    </div>
                <Footer conBottom={false}/>
            </div>
        );
      }  
}

export default Terminos;
