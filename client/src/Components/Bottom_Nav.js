import React from 'react'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';



const Bottom_Nav = () => {

    const { SubMenu } = Menu;

    
  return (
    <>
               <div className='bottom-nav'>
                   <div className='hi-container'>
                     <div className='all-category'>
                     <MenuUnfoldOutlined />
                     <p className='category-text'>Browes Category</p>
                     </div>
                   
                      <Menu className='menu' mode="horizontal" >
                            <Menu.Item key="Home" >
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="all" >
                               <Link to="All_Products">All Products</Link>
                            </Menu.Item>
                            <Menu.Item key="Man's Fashion" >
                                About us
                            </Menu.Item>
                            <Menu.Item key="Contact" >
                                Contact
                            </Menu.Item>
                        </Menu>
                      <p style={{margin:"0", fontSize:"16px",fontFamily:"Maven Pro', sans-serif"}}>Get <span style={{color:"green",fontWeight:"600"}}>50%</span> Discount On Black Friday Offer </p>  
               </div>
            </div>    
    </>
  )
}

export default Bottom_Nav