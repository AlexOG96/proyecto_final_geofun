import React from 'react';
import Header from '../components/header'
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

class Index extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        funciona: false
      };
    
  }

  handleFunciona() {
      this.setState({
        funciona: true
    })
  }
  render() {
    return (
      
      <div>
        <head>
        <meta name="google-site-verification" content="ahXrxK6Glgt4H-L8WEsxZxyHD6AX6blnMHpBbB8XUwk" />
        {/*
          <script async
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlHJEzjw5cJBiw6-6R-0s2pd55sf_0W08&libraries=places&callback=initMap">
          </script>
        */} 
        </head>
        <Header/>
        <Result
          icon={<SmileOutlined />}
          title="Bienvenido a Geofun"
        />
        <button onClick={() => this.handleFunciona()}>FUNCIONA</button>
        <div style={{display: this.state.funciona ? 'inline-block' : 'none'}}>heyyyyyyyy</div>
      </div>
    );
  }
}

export default Index;
