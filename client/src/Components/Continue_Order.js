import { Radio, Form, Space, Row, Col,Button,PageHeader,Descriptions ,Empty,List } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import { Store } from '../Store/Store';
import {useNavigate} from 'react-router-dom';
import React,{useState,useContext,useEffect} from 'react'


const Continue_Order = () => {
  let navigate = useNavigate()
  const {state,dispatch,userState} =useContext(Store)

  const [totalAmount,setTotalAmount] =useState('')
  const [shipping, setshipping ] = useState(50)


  const handleShipping=()=>{
    navigate(userState.userInfo ? '/shipping' : '/login?redirect=/shipping')
  }


useEffect(()=>{
  setTotalAmount(state.cartItems ? state.cartItems.reduce((ac,cc)=> ((ac + cc.price*cc.quantity) + shipping) , 0) : 0)
},[])

  return (
    <div className='container cart-page' style={{marginTop:"20px"}}>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row cart-page" span={16}>
                    <PageHeader className="site-page-header"  title="Shopping Cart"  />
                      <Row className='cart-box-header' >
                            <Col className="gutter-row" span={8}>
                                <div className='cart-single-box'>Products Name</div>
                             </Col>
                              <Col className="gutter-row" span={6}>
                                <div className='cart-single-box' >Unit Price</div>
                              </Col>
                              <Col className="gutter-row" span={5}>
                                <div className='cart-single-box' >Quantity</div>
                              </Col>
                              <Col className="gutter-row" span={5}>
                                <div  className='cart-single-box' >Action</div>
                              </Col>
                      </Row>
                                  {state.cartItems.length  ? state.cartItems.map(items=>(   

                                           <Row className='cart-box-container'>
                                                 <Col className="gutter-row" span={8}>
                                                    <div className='productname-img cart-single-items'>  
                                                         <img src={items.img} />
                                                        <div style={{width:"75%"}} > {items.pname} </div>
                                                    </div>
                                                 </Col>
                                                  <Col className="gutter-row" span={6}>
                                                    <div className='cart-single-items' >${items.price * items.quantity}.00</div>
                                                  </Col>
                                                  <Col className="gutter-row" span={5}>
                                                    <div className='cart-single-items' >{items.quantity}</div>
                                                  </Col>
                                                  <Col className="gutter-row" span={5}>
                                                    <div  className='cart-single-items' ><DeleteOutlined onClick={()=>dispatch({type :"REMOVE_CART", payload: items._id})} /></div>
                                                  </Col>
                                          </Row> 
                        
                                  )) 
                                     :
                              <Empty description="Add a product" />
                              }
                  <PageHeader className="site-page-header"  title="Continue Shopping"  onBack={() => window.history.back()} />        
                    </Col>

                    <Col className="gutter-row" span={8}>
                        <div className='total-payable'>
                        <PageHeader className="site-page-header"  title="Order Summary"  />
                          <div className='payable-box'>
                             <h3>Order Total: <span>${state.cartItems? state.cartItems.reduce((ac,cc)=> ac + cc.price*cc.quantity, 0) : 0  }.00  </span></h3>
                             <h3>Discount: <span>$0.00</span></h3>
                             <h3>Shipping: <span>${state.cartItems.length == 0 ? "0" : shipping }.00</span></h3>  
                          </div>
                          <PageHeader className="site-page-header"  title={ `Total : ${totalAmount} `  }
                            extra={[
                              <Button style={{background:"#434E6E",color:"white"}} key="3"  onClick={handleShipping}>Payment</Button>,
                            ]}
                          
                          />
                        </div>

                    </Col>
                    </Row>
        

      </div>


  )
}

export default Continue_Order