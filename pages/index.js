import React from 'react';
import Header from '../components/header'
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

class Index extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Result
          icon={<SmileOutlined />}
          title="Bienvenido a Geofun"
        />
      </div>
    );
  }
}

export default Index;
