import React from 'react'
import { Image, Menu, PageHeader } from 'antd';
import Link from 'next/link'
import {HomeOutlined ,EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          };
      }

      


    render() {
        return(
            <div>
                <PageHeader
                    className="site-page-header"
                    title={<Link href={`./`}><Image preview={false} width={300} alt='geoexplore' src={'https://i.ibb.co/Fm3vDsQ/logo.png'}/></Link>}
                    style={{backgroundColor: '#001529', color:'white'}}
                >
                    <Menu mode="horizontal" theme="dark">
                        <Menu.Item key="inicio" icon={<HomeOutlined />}>
                            <Link href={`./`}>
                                Inicio                      
                            </Link> 
                        </Menu.Item>
                        <Menu.Item key="juego" icon={<EnvironmentOutlined />}>
                                <Link href={`./iniciojuego`}>
                                    Juego                      
                                </Link> 
                            </Menu.Item>
                            <SubMenu key="informacion" icon={<InfoCircleOutlined />} title="Información">
                                <Menu.Item key="privacidad"><Link href={`./privacidad`}>Política de privacidad</Link></Menu.Item>
                                <Menu.Item key="condiciones"><Link href={`./terminos`}>Términos y condiciones de uso</Link></Menu.Item>
                                <Menu.Item key="proteccion"><Link href={`./proteccion`}>Protección de datos</Link></Menu.Item>
                            </SubMenu>   
                    </Menu>
                </PageHeader>
            </div>
        );
    }
}

export default Header;