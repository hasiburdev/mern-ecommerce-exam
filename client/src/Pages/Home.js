import React from 'react';
import { Banner } from '../Components/Banner';
import Categories from '../Components/Categories';
import Mid_Banner from '../Components/Mid_Banner';
import Special from '../Components/Special';


const Home = ({products}) => {

  return <div className='home'>
         <Banner />
         <Categories />
         <Mid_Banner />
         <Special products={products} />
  </div>;
};

export default Home;
