import React from 'react'
import ct1 from '../Assest/img/product/ct1.png'
import ct2 from '../Assest/img/product/ct2.png'
import ct3 from '../Assest/img/product/ct3.png'
import ct4 from '../Assest/img/product/ct4.png'
import ct5 from '../Assest/img/product/ct5.png'




const Categories = () => {
  return (
    <div className='hi-container'>
        <div className='categories'>

            <div className='single-category'>
                <div className='circle'> 
                   <img src={ct1}/>
                 </div>
                <h3 className='text'>Category Name</h3>
            </div>

            <div className='single-category'>
                <div className='circle'><img src={ct2}/></div>
                <h3 className='text'>Category Name</h3>
            </div>

            <div className='single-category'>
                <div className='circle'><img src={ct3}/></div>
                <h3 className='text'>Category Name</h3>
            </div>

            <div className='single-category'>
                <div className='circle'><img  src={ct4}/></div>
                <h3 className='text'>Category Name</h3>
            </div>

            <div className='single-category'>
                <div className='circle'><img style={{width:"100%",height:"80%"}} src={ct5}/></div>
                <h3 className='text'>Category Name</h3>
            </div>

            <div className='single-category'>
                <div className='circle'><img style={{width:"100%",height:"80%"}} src={ct1}/></div>
                <h3 className='text'>Category Name</h3>
            </div>
        </div>
    </div>
  )
}

export default Categories