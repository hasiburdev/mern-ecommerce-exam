import React, { useContext, useEffect, useState} from 'react'
import { Form, Input, Button, Divider } from 'antd';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { Link, useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Store } from '../Store/Store';


const Login = () => {

    const navigate = useNavigate()

    const {search} = useLocation()
    const redirectUrl = new URLSearchParams(search).get("redirect")
    const redirect = redirectUrl ? redirectUrl : "/" 
    console.log(redirect)

    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const {userDispatch,userState} =useContext(Store)



    const handleLogin=async()=>{
        await axios.post('http://localhost:8000/api/users/login', {
            email:email,
            password:password
          })
          .then(function (loginInfo) {
            const data = loginInfo.data
            localStorage.setItem('userInfo', JSON.stringify(data));
            userDispatch({
                type: "ADD_USER",
                payload: data
            })
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


    //   ....................................................  //

  return (
      <>
    <div className='login-signup'>
        <div className='form-header'>
            <RiAccountPinCircleFill/>
           <h1>Login <span>Your Acount</span> </h1>
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
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Item>
            <p className='form-para'> <span><Link to="forgotpassword"> Forgot password </Link></span>  </p>
            <Divider>Or</Divider>
            <Form.Item
                name="remember"
                valuePropName="checked"
            >
           {/* <p className='form-para-signup'> <span>Don't have an account ? <Link to={`signup?redirect=/${redirect}`}> Sign up </Link></span></p> */}

            </Form.Item>

            <Form.Item >
                <Button style={{background:"#434E6E",padding:"0px 25px",color:"white"}}
                 onClick={handleLogin}
                > 
                  Login 
                </Button>
            </Form.Item>
            </Form>

    </div>

</>
  )
}

export default Login