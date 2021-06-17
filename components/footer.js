import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'antd';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conBottom: this.props.conBottom
          };
        
      }

    render() {
        return(
            <div style={this.state.conBottom ? estiloBottom : estiloNormal}>
                <Row>
                    <Col span={16}>
                            <span style={{fontSize: 20, borderRight: 'solid', borderRightColor: '#9099A2', borderWidth: 1, paddingRight: 5}}>
                                <Link href={`./privacidad`}> 
                                    <a style={{color:'#9099A2'}}>Política de privacidad</a>
                                </Link>
                            </span>
                            <span style={{fontSize: 20, borderRight: 'solid', borderRightColor: '#9099A2', borderWidth: 1, paddingRight: 5, marginLeft: 5}}>
                                <Link href={`./terminos`}>
                                    <a style={{color:'#9099A2'}}>Términos y condiciones de uso</a>
                                </Link>
                            </span>
                            <span style={{fontSize: 20, marginLeft: 5}}>
                                <Link href={`./proteccion`}>
                                    <a style={{color:'#9099A2'}}>Protección de datos</a>
                                </Link>
                            </span>
                    </Col>
                    <Col span={8}>
                        <p style={{color: '#9099A2', fontSize: 20, textAlign: 'right'}}>Proyecto realizado por Alejandro Ortega García</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

//Estilos

var estiloBottom = {
    background: '#001529', 
    paddingTop: 40, 
    paddingLeft: 15, 
    paddingRight: 15, 
    width: '100%', 
    position:'fixed', 
    bottom: 0
}

var estiloNormal = {
    background: '#001529', 
    paddingTop: 40, 
    paddingLeft: 15, 
    paddingRight: 15, 
    width: '100%'
}

export default Footer;