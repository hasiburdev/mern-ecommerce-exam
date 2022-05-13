import { Col, Row } from 'antd'
import React,{useContext,useEffect, useState } from 'react'
import { Store } from '../Store/Store';

const ViewCart = () => {

const {state ,dispatch} = useContext(Store)
const [shipping, setShipping] = useState(50)
const [total, setTotal] = useState('')
// qunatity incress decress
const quantity =(item,quantity)=>{
    dispatch({type:"ADD_CART",
              payload: {...item, quantity}
  })
  }


  useEffect(()=>{
     let cartTotal = state.cartItems? state.cartItems.reduce((ac,cc)=> ac + cc.price*cc.quantity, 0) : 0
      setTotal(shipping + cartTotal)
  })



  return (
    <div className='view-cart'>
         <div className='container'>
                <Row>
                   <Col span={14}>
                            <div className="cart-wrapper">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail"></th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">QUANTITY</th>
                                                <th className="product-subtotal">SUBTOTAL</th>
                                                <th className="product-delete"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {state.cartItems.map(product=>(
                                                <tr className='cart-body'>
                                                 <td className="product-thumbnail"><a href="#"><img src={product.img} alt=""/></a></td>
                                                <td className="product-name">
                                                    <h4><a href="">{product.productName}</a></h4>
                                                </td>
                                                <td className="product-price">$ {product.price}</td>
                                                
                                                <td className="product-quantity">
                                                    <div className="cart--plus--minus">
                                                        <form action="#" className="num-block">
                                                            <input type="text" className="in-num" value={product.quantity} readonly=""/>
                                                            <div className="qtybutton-box">
                                                                <span className="plus" onClick={()=> quantity(product, product.quantity+1)}><i className="fas fa-angle-up"></i></span>
                                                                <span className="minus dis" onClick={()=> quantity(product, product.quantity-1)}><i className="fas fa-angle-down"></i></span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span>$ 27.99</span></td>
                                                <td className="product-delete" onClick={()=>dispatch({type :"REMOVE_CART", payload: product._id})}><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                               </tr>                              
                                                ))
                                              }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className="shop-cart-bottom">
                                <div className="cart-coupon">
                                    <form action="#">
                                        <input type="text" placeholder="Enter Coupon Code..."/>
                                        <button className="button" >Apply Coupon</button>
                                    </form>
                                </div>
                            </div>
                 </Col>

                   <Col span={10}>
                            <div className="shop-cart-total">
                                <h3 className="title">Cart Totals</h3>
                                <div className="shop-cart-widget">
                                    <form action="#">
                                        <ul>
                                            <li className="sub-total"><span>Subtotal</span> ${state.cartItems? state.cartItems.reduce((ac,cc)=> ac + cc.price*cc.quantity, 0) : 0  }.00</li>
                                            <li>
                                                <span>Shipping</span>
                                                <div className="shop-check-wrap">
                                                    <div className="custom-control custom-checkbox">
                                                        <label className="custom-control-label" for="customCheck2">LOCAL PICKUP: ${shipping} </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="cart-total-amount"><span>Total Price : </span> <span className="amount"> ${total}.00
                                                </span></li>
                                        </ul>
                                        <a href="" className="button">PROCEED TO CHECKOUT</a>
                                    </form>
                                </div>
                            </div>
                    </Col>
        </Row>
      </div>
    </div>
  )
}

export default ViewCart