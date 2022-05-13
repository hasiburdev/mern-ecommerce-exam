import React,{ useState } from 'react'
import { Row, Col} from 'antd';
import ProductCard from './ProductCard';


const Special = ({products}) => {

 const data = products


  return (
    <div className='special'>
    <div className='container'>
            {/* <!-- special-products-area --> */}

            <Row>
                <Col flex="auto">
                      <div class="row align-items-end mb-50">
                        <div class="col-md-8 col-sm-9">
                            <div class="section-title">
                                <span class="sub-title">Awesome Shop</span>
                                <h2 class="title">Our Special Products</h2>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col flex="100px">
                <div class="col-md-4 col-sm-3">
                            <div class="section-btn">
                                <a href="shop.html" class="btn">View All</a>
                            </div>
                        </div>
                </Col>
           </Row>

                  <Row>
                    <Col span={5}>
                         <div className='left-banner'>
                                   <div class="sp-add-content">
                                         <span class="sub-title">healthy food</span>
                                        <h4 class="title">baby favorite <b>Product</b></h4>
                                        <p>Super Offer TO 50% OFF</p>
                                        <a href="shop.html" class="btn rounded-btn">shop now</a>
                                    </div>
                          </div>

                    </Col>
                    <Col span={19}>
                         <Row gutter={[18, 18]}>
                            <ProductCard products={data} />
                         </Row>
                    </Col>
                  </Row>

            {/* <!-- special-products-area-end--> */}

    </div>
  </div>
  )
}

export default Special
