import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';   
import {StoreProvide} from './Store/Store'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   
import { PayPalScriptProvider} from "@paypal/react-paypal-js";          
ReactDOM.render(
   <StoreProvide> 
        <PayPalScriptProvider deferLoading={true} >
           <App />
        </PayPalScriptProvider>
    </StoreProvide>,
document.getElementById('root'));

reportWebVitals();
