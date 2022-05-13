import React,{useState,useContext} from 'react'
import { Col,Modal} from 'antd';
import Button from './Button';
import Rating from './Rating';
import {EyeOutlined} from '@ant-design/icons';
import axios from 'axios';
import { Store } from '../Store/Store';
import { Link, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';


const ProductCard = ({products}) => {
  const {state:cstate, dispatch:cdispatch,userDispatch,userState} = useContext(Store)
  const [singleProduct, setSingleProduct] = useState([])
  const navigate = useNavigate()





// details modal
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = async(id) => {
  setIsModalVisible(true);
  const products= await axios.get(`http://localhost:8000/products/${id}`)
  let newproduct = products.data
  setSingleProduct(newproduct)

};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};








// add cart
const addCart =async(id)=>{

if(userState.userInfo){
  try {
    const products= await axios.get(`http://localhost:8000/products/${id}`)
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
else{
  navigate(`/login?redirect=${id}`)
}

}
// qunatity incress decress
// const quantity =(item,quantity)=>{
//   cdispatch({type:"ADD_CART",
//             payload: {...item, quantity}
// })
// }

console.log(singleProduct)

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
                              {/* <Link to={`${product.slug}`}><span className="products-name"> {product.productName} </span></Link> */}
                              <span className="products-name" onClick={()=>showModal(product._id)} > {product.productName} </span>
                              <span className="products-description"> {product.description.substring(0, 20)}</span>
                              <span className="products-price">${product.price}</span>
                              <span className='btn'><Button onClick={()=>addCart(product._id)}> Add Cart </Button> <a className='view'> <EyeOutlined /> </a></span>
                            </div>
                            </div>
                        </Col> 
                         ))
                       }

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <ProductDetails singleProduct={singleProduct} handleOk={handleOk} setIsModalVisible={setIsModalVisible} />
      </Modal>


          </>
                    
  )
}

export default ProductCard