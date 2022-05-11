import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Button from './Button';
import bg1 from '../Assest/img/slider/01.jpg'
import bg2 from '../Assest/img/slider/02.jpg'
import bg3 from '../Assest/img/slider/03.jpg'
import bg4 from '../Assest/img/slider/04.jpg'
import bg5 from '../Assest/img/slider/05.jpg'
import 'rc-banner-anim/assets/index.css';
import './style.css'
import { Row, Col } from 'antd';
const BgElement = Element.BgElement;





export const Banner = () => {




  return (
    <div className='hi-container'>
        <div className='banner'>
     <Row>
      <Col flex={12}>       
                      <BannerAnim autoPlay prefixCls="banner-user" style={{height:"450px"}}>
                            <Element autoPlay prefixCls="banner-user-elem" key="0">
                                <BgElement  key="bg" className="bg" style={{background:'white',height:"100%"}}>
                                    <TweenOne className="banner-user-title banner-text-image" animation={{ y: 30, opacity: 0, type: 'from' }}>
                                       <div className='banner-text right-banner-title'>
                                           <h1 className='banner-title'>Find Out Your Best Furniture Here </h1>
                                           <p className='banner-para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                                            <button className='right-btn'> Shop </button>
                                       </div>
                                       <img className='banner-bg' src={bg1} />
                                    </TweenOne>
                                </BgElement>
                            </Element>

                            <Element prefixCls="banner-user-elem" key="1">
                                <BgElement key="bg" className="bg" style={{background:'white',height:"100%"}}>
                                    <TweenOne className="banner-user-title banner-text-image" animation={{ y: 30, opacity: 0, type: 'from' }}>
                                       <div className='banner-text'>
                                           <h1 className='banner-title'>Find Out Your Best Furniture Here </h1>
                                           <p className='banner-para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                                            <Button> Shop </Button>
                                       </div>
                                       <img className='banner-bg' src={bg2} />
                                    </TweenOne>
                                </BgElement>
                            </Element>
                      </BannerAnim></Col>
      <Col >

        <Row gutter={[0, 8]}>
            <Col span={24}> <div className='side-banner'><img style={{height:"100%"}} src={bg5} /></div></Col>
        </Row>
        <Row gutter={[0, 8]}>
            <Col span={24}> <div className='side-banner'><img style={{height:"100%",marginTop:"15px"}} src={bg4} /></div></Col>
        </Row>
      </Col>

      <Col>
           <div className='side-banner-long'><img style={{height:"100%"}} className='banner-bg-long' src={bg3} /></div>
       </Col>
    </Row>
    </div>
</div>
  )
}
