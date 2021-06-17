import React from 'react'
import useRouter from 'next/router'
import { Image, Menu, PageHeader, Typography } from 'antd';
import Link from 'next/link'
import { EditOutlined, GlobalOutlined ,TeamOutlined ,UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
          };
        
      }

      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
      


    render() {
        const { current } = this.state;
        return(
            <div>
                <PageHeader
                    className="site-page-header"
                    title={<Link href={`./`}><Image preview={false} width={300} alt='geoexplore' src={'https://i.ibb.co/Fm3vDsQ/logo.png'}/></Link>}
                    style={{backgroundColor: '#001529', color:'white'}}
                >
                    <Menu onClick={this.handleClick}  mode="horizontal" theme="dark">
                        <Menu.Item key="mail" icon={<UserOutlined />}>
                            <Link href={`./iniciosesion`}>
                                Login                      
                            </Link> 
                        </Menu.Item>
                        <Menu.Item key="setting:2" icon={<EditOutlined />}>
                                <Link href={`./registro`}>
                                    Registrarse                      
                                </Link> 
                            </Menu.Item>
                        <Menu.Item key="app" icon={<TeamOutlined />}>
                            <Link href={`./usuarios`}>
                                Usuarios                     
                            </Link>
                        </Menu.Item>
                            <Menu.Item key="setting:1" icon={<GlobalOutlined />}>
                                <Link href={`./pruebarandommap`}>
                                    Mapa                     
                                </Link> 
                            </Menu.Item>
                            <Menu.Item key="setting:3" icon={<EnvironmentOutlined />}>
                                <Link href={`./iniciojuego`}>
                                    Juego                     
                                </Link> 
                            </Menu.Item>
                    </Menu>
                </PageHeader>
            </div>
        );
    }
}

export default Header;