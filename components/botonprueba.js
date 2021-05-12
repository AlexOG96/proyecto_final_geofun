import React from 'react';
import { Button } from 'antd';

class Boton extends React.Component {
    constructor(props) {
        super(props);
    }
   /* componentDidMount() {
        console.log('Ha cargado el botón');
    }
    */
    render() {
        return(<Button type={this.props.tipo} onClick={this.props.click}>{this.props.titulo}</Button>);
    }
}

//estilos
export default Boton;