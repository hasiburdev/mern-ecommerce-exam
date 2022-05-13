
import './App.css';
import React, { useContext,useEffect,useState } from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import All_Products from './Pages/Product_Page'
import  Admin  from './Dashboard/Admin';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Store } from './Store/Store';
import ProductDetails from './Components/ProductDetails';
// import { data } from './Components/demoData'
import axios from 'axios';
import ViewCart from './Components/ViewCart';


const App = () => {

const [data, setdata] = useState([])
    useEffect(async()=>{
        await axios.get('http://localhost:8000/products').then((products)=>{
         setdata(products.data)
        })

    },[])



    const {userState:{userInfo}} =useContext(Store)
    

    return (
        <>
                <BrowserRouter>
                    <Navbar />
                        <Routes>
                                <Route path="/" element={<Home products={data}/>} />
                                <Route path="/All_Products" element={<All_Products products={data}/>} />
                                <Route path="/ViewCart" element={<ViewCart />} />
                                {/* <Route path="/All_Products/:slug" element={<ProductDetails/>} /> */}
                                <Route path='/Login' element={<Login/>} />
                                <Route path='/Signup' element={<Signup/>} />
                                <Route path="/Admin" element={<Admin />} />
    

                        </Routes>
                    <Footer />
                </BrowserRouter>

        </>
    );
}


export default App