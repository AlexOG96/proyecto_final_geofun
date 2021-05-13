import React from 'react';
import { Button, Checkbox, Col, Divider, Input, Row } from 'antd';
import Link from 'next/link'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Row justify="space-around" gutter={16}>
                <form>
                  <h1>Login</h1>
                  <Divider></Divider>
                  <Row gutter={[16, 16]} align="top">
                    <Col className="gutter-row" span={9}>
                      Usuario 
                    </Col>
                    <Col className="gutter-row" span={9}>
                        <Input allowClear maxLength={10} style={{width: 200}}></Input>
                    </Col>
                    <Col className="gutter-row" span={9}>
                        Contraseña
                    </Col>
                    <Col className="gutter-row" span={9}>
                        <Input.Password style={{width: 200}}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        ></Input.Password>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Checkbox>Recordar usuario</Checkbox>
                    </Col>
                    <Col className="gutter-row" span={9} >
                      <Button type='primary'>Acceder</Button>
                    </Col>
                    <Col className="gutter-row" span={9}>
                      <Link href={`./registro`}>
                        <Button>Registrarse</Button>                   
                      </Link> 
                    </Col>
                  </Row>
                </form>
              </Row>
              </div>
        );
    }
}

//estilos
export default Login;