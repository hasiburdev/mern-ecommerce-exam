import { Row,Col } from 'antd'
import React from 'react'
import Button from '../Components/Button'
import {data} from '../Components/demoData'
import Rating from '../Components/Rating'
import {EyeOutlined} from '@ant-design/icons';
import ProductCard from '../Components/ProductCard'
const Product_Page = ({products}) => {
  return (
    <div className='hi-container'>
              <div className='all-products'>
              <Row>
                    <Col span={4} style={{marginRight:"20px"}}>
                               <div className='left-filter'>
                                  <h2>Filter</h2>
                              </div>
                    </Col>
                    <Col span={19}>
                         <Row gutter={[24, 19]}>

                          <ProductCard products={products} />

                         </Row>
                    </Col>
                  </Row>


              </div>



    </div>
  )
}

export default Product_Page