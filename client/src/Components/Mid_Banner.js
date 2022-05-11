import React from 'react'
import midBanBgR from '../Assest/mR.png'
import ob1 from '../Assest/img/bg/ob1.jpg'
import Button from './Button'

const Mid_Banner = () => {
  return (
    <div className='mid-banner'>
     <img className='ban-img' src={ob1} />
     <div className='mid-banner-details'>
     <h1> 
        <span className='mid-title'>Buy Best Foods At <br/>A Cheaper Rate</span> <br/>

        <span className='mid-sub-title'>$160.00 $200.00 </span> <br/>
     </h1>
     <Button>Shop</Button>
     </div>

    </div>
  )
}

export default Mid_Banner