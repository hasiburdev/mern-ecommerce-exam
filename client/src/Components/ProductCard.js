import React,{useState,useContext} from 'react'
import { Col} from 'antd';
import Button from './Button';
import Rating from './Rating';
import {EyeOutlined} from '@ant-design/icons';
import axios from 'axios';
import { Store } from '../Store/Store';


const ProductCard = ({products}) => {
  const {state:cstate, dispatch:cdispatch,} = useContext(Store)


const addCart =async(id)=>{
    try {
      const products= await axios.get(`http://localhost:8000/api/all_products/${id}`)
      let newproduct = products.data
      let exproduct = cstate.cartItems.find(item=> item._id == newproduct._id)
      let quantity = exproduct ?  newproduct.quantity : 1
      cdispatch({
        type:"ADD_CART",
        payload:{...newproduct,quantity}
      })

    }
    catch(err) {
      console.log(err)
    }
}


  return ( 
          <>          
          {products.map(product=>(
                          <Col span={6} key={product._id}>
                           <div className='product-card'>
                            <div className='products-image'>
                              <img src={product.img}/>
                            </div>
                            <div className='product-details'>
                              <span className="products-rating"> <Rating rating={product.rating} /></span>
                              <span className="products-name"> {product.productName} </span>
                              <span className="products-description"> {product.description}</span>
                              <span className="products-price">${product.price}</span>
                              <span className='btn'><Button onClick={()=>addCart(product._id)}> Add Cart </Button> <a className='view'> <EyeOutlined /> </a></span>
                            </div>
                            </div>
                        </Col> 
                         ))
                       }

          </>
                    
  )
}

export default ProductCard