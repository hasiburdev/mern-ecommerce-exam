import React,{useContext, useEffect, useState} from 'react'
import {ShoppingCartOutlined,HeartOutlined,UserOutlined} from '@ant-design/icons';
import { Badge, Avatar, Input,Dropdown,Menu,PageHeader,Button } from 'antd'
import logo from '../Assest/img/logo/logo.png'
import { Store } from '../Store/Store';
import { Link } from 'react-router-dom';





const Mid_Nav = () => {
    const [showCart,setShowCart] = useState(false)
    const onSearch = value => console.log(value);
    const { Search } = Input;
    const {state,userState} =useContext(Store)
    const [userAccount, setUserAccount] = useState("")

    const handleLogout =()=>{
      localStorage.removeItem("userInfo")
      setUserAccount("Account")
    }
    const sidecart =()=>{
      if(showCart){
        setShowCart(false)
      }
      else{
        setShowCart(true)
      }
    }
    const cartClose =()=>{
      setShowCart(false)
    }


    useEffect(()=>{
      if(userState.userInfo){
        setUserAccount(userState.userInfo.name)
      }
     else{
      setUserAccount("Account")
     }
    },[userState])

  return (
    <>
      <div className='mid-nav'>
      <div className='hi-container'>
                  <div className='logo'><img src={logo} /></div>
                     <div className='search'>
                     <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        />
                    </div>   
                    <div className='cart'>
                      <Badge count={5}>
                           <Avatar icon={ <HeartOutlined />}/>
                      </Badge> 
                      <Badge count={state.cartItems.length} onClick={sidecart} >
                           <Link to=''><Avatar icon={ <ShoppingCartOutlined  />}/></Link>
                      </Badge> 
                    </div>

                    <div className='account'>
                      <UserOutlined style={{marginRight:"10px"}} /> 
                          <Dropdown overlay={
                              <Menu>
                                <Menu.Item key="0">
                                   <Link to="/login">Login</Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                   <Link to="/Signup">Sign up</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                   <Link to="/Signup" onClick={handleLogout}>Logout</Link>
                                </Menu.Item>
                            </Menu>
                          }>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                         {userAccount}
                        </a>
                      </Dropdown>
                    </div>
               </div>
               {/* side cart */}


             <div className={showCart ? "dropwowncart" : "hidedropdown"}>
             <PageHeader className="site-page-header"  title="Shopping Cart" subTitle="Total (5) Items"  extra={[ <Button onClick={cartClose} key="3">Close</Button>]}/>
            
                <div class="minicart">
                      <span className='minicart-img'><img /></span>
                      <span className='minicart-name-price'>
                          <span className='minicart-name'>Product Name</span>
                          <span className='minicart-price'>Product Price</span>
                      </span>
                      <span className='minicart-action'>delet</span>
                </div>
            
                <div className='cartFooter'>
                     <span className='totalcart'>Total : $1205.00</span>
                     <button className='button'> Continue Order </button>
                  </div>
              </div> 
            </div>


    </>
  )
}

export default Mid_Nav