import React from 'react';
import Header from '../components/header'
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Footer from '../components/footer';

var alturaVentana = '';
if (typeof window !== "undefined") {
  alturaVentana = window.innerHeight;
}

class Index extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        funciona: false
      };
    
  }
  render() {
    
    return (
      
      <div style={{height: alturaVentana}}>
        <head>
        <meta name="google-site-verification" content="ahXrxK6Glgt4H-L8WEsxZxyHD6AX6blnMHpBbB8XUwk" />
        {/*
          <script async
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlHJEzjw5cJBiw6-6R-0s2pd55sf_0W08&libraries=places&callback=initMap">
          </script>
        */} 
        </head>
        <Header/>
        <div>
          <Result
            icon={<SmileOutlined />}
            title="Bienvenido a Geofun"
          />
        </div>
        <Footer conBottom={true}/>
      </div>
    );
  }
}

export default Index;
