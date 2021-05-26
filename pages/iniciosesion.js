import React from 'react';
import Header from '../components/header'
import Login from '../components/login'
import { notification } from 'antd';

class InicioSesion extends React.Component {
  
    constructor(props) {
      super(props);
    }
  
    openNotification() {
      notification['info']({
        message: '¡Regístrate!',
        description:
          'Regístrate si no lo estás.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };
  
    componentDidMount() {
      this.openNotification();
    }
  
    render() {
      
  
        return ( 
            <div>
            <Header titulo="Login"/>
                 <Login/>
            </div>
      );
    }
  }
  
  export default InicioSesion
