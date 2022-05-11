
import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import All_Products from './Pages/Product_Page'
import  Admin  from './Dashboard/Admin';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Store } from './Store/Store';
import { data } from './Components/demoData'


const App = () => {

    const {userState:{userInfo}} =useContext(Store)
    

    return (
        <>
                <BrowserRouter>
                    <Navbar />
                        <Routes>
                                <Route path="/" element={<Home products={data}/>} />
                                <Route path="/All_Products" element={<All_Products products={data}/>} />
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