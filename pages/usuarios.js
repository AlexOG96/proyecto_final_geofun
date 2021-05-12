import React from 'react'
import useRouter from 'next/router'
import Boton from '../components/botonprueba'
import Header from '../components/header'
import { Card, Col, Divider, Row, Select, Switch } from 'antd'
import datosJson from './loremipsum.json'
import 'antd/dist/antd.css';

class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "Green English" ,
            loadedButton: false ,
            arrayCliente: null ,
            mostrarAmigos: false,
            fondo:'white'
        }
      }

      changeTheme = value => {
        this.setState({
                fondo: value ? 'grey' : 'white',
            });
        };

      /*componentDidUpdate(nextState) {
          if (nextState.valor !== this.state.valor) {
            this.setState({
                loadedButton: true
            })
          }
      }
    */
      handleChange(value) {
        this.setState({
            valor: value ,
            loadedButton: false
        })
      }

    handleClient() {
        let dato;
        for (dato of datosJson) {
            if (this.state.valor === dato.name) {
                this.setState({
                    arrayCliente: dato,
                    mostrarAmigos: false
                })
            }
        }
    }

    handleAmigos() {
        if (!this.state.mostrarAmigos) {
            this.setState({
            mostrarAmigos: true
            })
        }
        else {
            this.setState({
            mostrarAmigos: false
            })
        }
    }
  
    render() {

        const { Option } = Select;
        return(
            <div style={{backgroundColor: this.state.fondo, paddingBottom: '100%'}}>
                <Header titulo="Usuarios"></Header>
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} around="xs" align="center" style={{marginTop: 50}}>
                    <Col className="gutter-row" xs={{ span: 1}}>
                        <Select id="seleccionCliente" value={this.state.valor} style={{ width: 150 }} onChange={(e) => this.handleChange(e)}>
                            <Option value="Green English">Green English</Option>
                            <Option value="Reilly Lamb">Reilly Lamb</Option>
                            <Option value="Merritt Bonner">Merritt Bonner</Option>
                            <Option value="Regina Duke">Regina Duke</Option>
                            <Option value="Tina Joyner">Tina Joyner</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 2, offset: 1 }}>
                    <Boton titulo="Mostrar usuario" tipo="primary" click={() => this.handleClient()}></Boton>
                    </Col>
                    <Switch
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    onChange={this.changeTheme}
                    ></Switch> 
                </Row> 
            {
                this.state.arrayCliente !== null && 
                <div>
                    <Row gutter={[16,16]} align="center" style={{marginTop: 50}}>
                        <Card title={`${this.state.arrayCliente.name}`} 
                        extra={<Boton titulo="Amigos" click={() => this.handleAmigos() }/>} 
                        style={{ width: 300, backgroundColor: "lightgrey"}}>
                                Edad: {`${this.state.arrayCliente.age}`}
                                <br/>
                                Género: {`${this.state.arrayCliente.gender}`}
                                <br/>
                                Empresa: {`${this.state.arrayCliente.company}`}
                                <br/>
                                Email: {`${this.state.arrayCliente.email}`}
                                <br/>
                                Teléfono: {`${this.state.arrayCliente.phone}`}
                        </Card>
                    </Row>
                </div>
                
            }
            {
                this.state.mostrarAmigos &&
                <div>
                    <Row gutter={[16,16]} align="center">
                        <Card style={{ width: 300, backgroundColor: "lightgrey" }}>
                            {`${this.state.arrayCliente.friends[0].name}`}
                            <br/>
                            {`${this.state.arrayCliente.friends[1].name}`}
                            <br/>
                            {`${this.state.arrayCliente.friends[2].name}`}
                            <br/>
                        </Card>
                    </Row>
                </div>
            }  
            </div>
        );
    }
}

export default Usuarios