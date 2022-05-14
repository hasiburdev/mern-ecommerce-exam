import React,{useState} from 'react'
import { Form, Input, Divider , Select,notification, Alert} from 'antd';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { Link, useNavigate} from 'react-router-dom';
import Button from './Button';
import axios from 'axios';

const { Option } = Select;


const Signup = () => {


    const navigate = useNavigate()
    const[userName, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[conPassword,setConPassword] = useState('')
    const [suc, setSuc] = useState('')
  

    const openNotification = () => {
        notification.open({
          message: 'Account Created',
          description: "Your account have been successfully created"
        })
      }


    const handleSignup=async()=>{

            await axios.post('http://localhost:8000/auth/signup', {
                name : userName,
                email : email,
                password : password,
              })
              .then(function () {
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    setConPassword('')
                    setSuc(openNotification())
                    navigate('/login')
              })
              .catch(function (error) {
                console.log(error);
              });
         }



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
         <Form  name="basic" labelCol={{}} wrapperCol={{ span: 24,}}initialValues={{remember: true,}}

            style={{width:"100%"}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item  style={{marginBottom:"10px"}} name="name" rules={[{ required: true, message: 'Please input your name!',},]}  >
                <Input placeholder='Userame' name='userName'  onChange={(e)=>setUserName(e.target.value)} />
            </Form.Item>
                
            <Form.Item style={{marginBottom:"10px"}} name="email" rules={[ { required: true,message: 'Please input your email!', }, ]} >
                <Input placeholder='Email' name='email'  onChange={(e)=>setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item style={{marginBottom:"10px"}} name="password" rules={[ { required: true, message: 'Please input your password!',},]}>
                <Input placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item style={{marginBottom:"10px"}} name="password" rules={[ { required: true, message: 'Please input your Confirm password!',},]}>
                <Input placeholder='Confirm Password' name='conpassword' onChange={(e)=>setConPassword(e.target.value)}/>
            </Form.Item>
            <Select className='role-select' defaultValue="Customer" style={{ width: "100px",textAlign:"left" }}>
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
                <Button onClick={handleSignup} style={{background:"#434E6E",padding:"0px 25px",color:"white"}}>Sign up</Button>
            </Form.Item>
            {suc ? <Alert message={suc} type="error" /> :"" }
            </Form>

    </div>

</>
  )
}

export default Signup