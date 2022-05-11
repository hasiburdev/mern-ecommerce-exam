import React from 'react'
import { Form, Input, Button, Divider ,Checkbox, Row, Select} from 'antd';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { Link} from 'react-router-dom';

const { Option } = Select;

function handleChange(value) {
 console.log(value)
}

const Signup = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };



  return (
      <>
    <div className='login-signup'>
        <div className='form-header'>
            <RiAccountPinCircleFill/>
           <h1>Signup</h1>
        </div>
                <Form
            name="basic"
            labelCol={{
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            style={{width:"100%"}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item 
                style={{marginBottom:"10px"}}
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Please input your name!',
                },
                ]}
            >
                <Input placeholder='Userame' />
            </Form.Item>
                
            <Form.Item
                style={{marginBottom:"10px"}}
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input placeholder='Email' />
            </Form.Item>

            <Form.Item
                style={{marginBottom:"10px"}}
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password placeholder='Password'/>
            </Form.Item>

            <Select className='role-select' defaultValue="Customer" style={{ width: "100px",textAlign:"left" }} onChange={handleChange}>
                <Option value="Suppier">Suppier</Option>
                <Option value="Customer">Customer</Option>
            </Select>
            <p className='form-para'> <span><Link to="forgotpassword"> Forgot password </Link></span>  </p>
            <Divider>Or</Divider>
            <Form.Item
                name="remember"
                valuePropName="checked"
            >
           <p className='form-para-signup'> <span>Have an account ? <Link to="/login"> Login </Link></span></p>

            </Form.Item>

            <Form.Item >
                <Button style={{background:"#434E6E",padding:"0px 25px",color:"white"}}>Sign up</Button>
            </Form.Item>
            </Form>

    </div>

</>
  )
}

export default Signup