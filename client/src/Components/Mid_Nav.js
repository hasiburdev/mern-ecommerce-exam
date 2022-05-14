import React,{useContext, useEffect, useState} from 'react'
import {ShoppingCartOutlined,HeartOutlined,UserOutlined,MinusCircleOutlined,PlusOutlined,MinusOutlined} from '@ant-design/icons';
import { Badge, Avatar, Input,Dropdown,Menu,PageHeader,Button } from 'antd'
import logo from '../Assest/img/logo/logo.png'
import { Store } from '../Store/Store';
import { Link, useNavigate } from 'react-router-dom';





const Mid_Nav = () => {
    const [showCart,setShowCart] = useState(false)
    const onSearch = value => console.log(value);
    const { Search } = Input;
    const {state,userState,dispatch,userDispatch} =useContext(Store)
    const [userAccount, setUserAccount] = useState("")
    const navigate = useNavigate()

    const handleLogout =()=>{
      localStorage.removeItem("userInfo")
      userDispatch({type:"REMOVE_USER"})
      dispatch({type:"CLEAR_CART"})
      setUserAccount("Account")
      navigate('/login')
    }

    

    //show side cart
    const sidecart =()=>{
      if(showCart){
        setShowCart(false)
      }
      else{
        setShowCart(true)
      }
    }
    //side cart close
    const cartClose =()=>{
      setShowCart(false)
    }
    useEffect(()=>{
      if(userState.userInfo){
        setUserAccount(userState.userInfo.name)
      }
     else{
      setUserAccount("Login/SignUp")
     }
    },[userState])

    // qunatity incress decress
   const quantity =(item,quantity)=>{
      dispatch({type:"ADD_CART",
      payload: {...item, quantity}
     })
     }



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
                                   {userState.userInfo && <span onClick={handleLogout}>Logout</span> }
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
             <PageHeader className="site-page-header"  title="Shopping Cart" subTitle={`Total ${state.cartItems.length} Items`}  extra={[ <Button onClick={cartClose} key="3">Close</Button>]}/>
            
              {state.cartItems.map(product=>(
                          <div class="minicart">
                                <span className='minicart-img'><img  src={product.img} /></span>
                                <span className='minicart-name-price'>
                                    <span className='minicart-name'>{product.productName}</span>
                                    <span className='minicart-price'>${product.price}</span>
                                    <span className='minicart-inc-dec'>
                                          {product.quantity==0? <button disabled ><MinusOutlined  /></button> :
                                          <button onClick={()=> quantity(product, product.quantity-1)} ><MinusOutlined  /></button> 
                                           }
                                          <span className='inc-amount'>{product.quantity}</span>
                                          <button onClick={()=> quantity(product, product.quantity+1)}><PlusOutlined/></button>
                                    </span>
                                   </span>
                                <span className='minicart-action' onClick={()=>dispatch({type :"REMOVE_CART", payload: product._id})}><i className="far fa-trash-alt"></i></span>
                          </div>
              ))}
            
                <div className='cartFooter'>
                     <span className='totalcart'>Total : ${state.cartItems? state.cartItems.reduce((ac,cc)=> ac + cc.price*cc.quantity, 0) : 0} </span>
                     <Link to='/viewcart'><button className='button' onClick={cartClose}> View Cart </button></Link>
                  </div>
              </div> 
            </div>
    </>
  )
}

export default Mid_Nav