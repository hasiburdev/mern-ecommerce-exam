
import { createContext, useReducer } from "react";
const Store = createContext()


// cart reducer start
 const initvalue ={
     cartItems: [],
    //  JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : {},
 }
const reducer =(state,action)=>{
    switch (action.type){
        case 'ADD_CART' :
        let newitems= action.payload
        let exproduct = state.cartItems.find((item)=> item._id ==newitems._id )
        let cartItems = exproduct ? state.cartItems.map((item)=> item._id == exproduct._id ? newitems : item) : [...state.cartItems,newitems]
        return {...state,cartItems} 
        //  remove individual product from cart
        case 'REMOVE_CART' :
         {
            let cartItems = state.cartItems.filter(items=> items._id !== action.payload)
            return {...state,cartItems}
         }
        case 'CLEAR_CART' :
            {
               return {...state,cartItems:[]}
            }
        default :
           return state
    }
}
// cart reducer end

///////////////////////////////////////////////////////////////////////////////////////

// user reducer start
const userInitvalue ={
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : null
}
const userReducer =(state,action)=>{
   switch (action.type){
       case 'ADD_USER':
       return {...state,userInfo:action.payload} 

       default :
          return state
   }
}
// user reducer end






const StoreProvide = (props)=>{
const [ state, dispatch] = useReducer(reducer, initvalue)
const [ userState, userDispatch] = useReducer(userReducer, userInitvalue)

const value = { state, dispatch, userState, userDispatch }

return  <Store.Provider value={value}> {props.children} </Store.Provider>

}


export {Store, StoreProvide }