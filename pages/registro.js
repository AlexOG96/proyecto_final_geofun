import React from 'react'
import useRouter from 'next/router'
import 'antd/dist/antd.css'
import { Button, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd'
import Link from 'next/link'
import Header from '../components/header'
import datosJson from './loremipsum.json'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const { Option } = Select;
  

  class Registro extends React.Component {

    formRef = React.createRef();
  
    constructor(props) {
      super(props);
      this.state = {
        value: 1,
        arrayCliente: {
          "_id": "6051f9872d84087414deee24",
          "index": 0,
          "isActive": true,
          "age": 34,
          "name": "Green English",
          "gender": "male",
          "company": "DAISU",
          "email": "greenenglish@daisu.com",
          "phone": "+1 (807) 436-2385",
          "tags": [
            "id",
            "ea",
            "magna",
            "duis",
            "velit",
            "quis",
            "do"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Langley Walters"
            },
            {
              "id": 1,
              "name": "Jacqueline Warren"
            },
            {
              "id": 2,
              "name": "Phoebe Huber"
            }
          ],
          "greeting": "Hello, Green English! You have 9 unread messages.",
          "favoriteFruit": "apple"
        } ,
        valor: "Green English"
      };
    }

    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };

    onReset = () => {
      this.formRef.current.resetFields();
    };

    onFill = () => {
      let dato;
      /* datosJson.forEach ((dato,index)=>{ 

      }) 
      */
      for (dato of datosJson) {
          if (this.state.valor === dato.name) {
              this.setState({
                  arrayCliente: dato
              })
              
          } 
          if (this.state.arrayCliente !== null) {
            this.formRef.current.setFieldsValue({
              username: this.state.arrayCliente.name,
            });
          }
      }
    }
    handleChange(value) {
      this.setState({
          valor: value 
      })
    }
  

    render() {
      const { value } = this.state;
      const radioStyle = {
        height: '30px',
        lineHeight: '30px',
      };
      console.log("render", this.state.arrayCliente)
        return ( 
          <div>
            <Header titulo="Registro"></Header>
            <Row align="center" gutter={16} style={{paddingTop: 50}}>
              <Form
                    {...layout}
                    name="basic"
                    ref={this.formRef}
                    initialValues={{
                      remember: true,
                    }}
                    style={{width: '35%'}}
                  >
                    <Form.Item
                      label="Usuario"
                      name="username"
                      value={this.state.arrayCliente.name}
                      rules={[
                        {
                          required: true,
                          message: 'Campo necesario',
                        },
                      ]}
                    >
                      <Input style={{width: 200}}/>
                    </Form.Item>

                    <Form.Item
                      label="Contraseña"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Campo necesario',
                        },
                      ]}
                    >
                      <Input.Password style={{width: 200}} />
                    </Form.Item>

                    <Form.Item
                      label="Confirmar contraseña"
                      name="confirm"
                      dependencies={['password']}
                      rules={[
                        {
                          required: true,
                          message: 'Por favor, confirma la contraseña',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('¡Las contraseñas no coinciden!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password style={{width: 200}} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="fechanac" label="Fecha de nacimiento:"
                      rules={[
                          {
                            required: true,
                            message: 'Campo necesario',
                          },
                        ]}
                    >
                      <DatePicker format={dateFormatList} style={{marginLeft: -225}}/>
                    </Form.Item>

                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                      <Input style={{width: 200}} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="genero" label="Género:">
                      <Radio.Group onChange={this.onChange} value={value} style={{marginLeft: -225}}>
                        <Radio style={radioStyle} value={1}>
                          Hombre
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                          Mujer
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                          Otro
                          {value === 3 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item {...tailLayout} name="condiciones">
                      <Checkbox>Acepto las &nbsp;
                      <Link href={`./Error`}>
                        condiciones de uso
                      </Link>
                      </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                        <Link href={`./iniciosesion`}>
                          Completar registro                    
                        </Link> 
                      </Button>
                      <Button htmlType="button" onClick={this.onReset}>
                        Vaciar
                      </Button>
                    </Form.Item>
                    {/*}
                    <Form.Item {...tailLayout}>
                      <Select id="seleccionCliente" value={this.state.valor} style={{ width: 148, marginRight: 10 }} onChange={ (e) => this.handleChange(e) }>
                          <Option value="Green English">Green English</Option>
                          <Option value="Reilly Lamb">Reilly Lamb</Option>
                          <Option value="Merritt Bonner">Merritt Bonner</Option>
                          <Option value="Regina Duke">Regina Duke</Option>
                          <Option value="Tina Joyner">Tina Joyner</Option>
                      </Select>
                      <Button type="default" htmlType="button" onClick={this.onFill}>
                        Rellenar
                      </Button>
                    </Form.Item>
                      */}
                </Form>
              </Row>
            </div>
      );
    }
  }

  export default Registro