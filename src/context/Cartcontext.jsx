import { createContext, useReducer,useContext, useEffect } from "react";
import reducer from "./Cartreducer";

const cartcontext= createContext()
const getLocalCart=()=>{
    let localCart= localStorage.getItem('cartItem')
  //  if (localCart.length ===0) {
    // return[]   
   // } else {
    //  return JSON.parse(localCart)  
    //}
    const pasedata = JSON.parse(localCart)
    if (!Array.isArray(pasedata)) return [];
    return pasedata
        
    
}
const initial={
    cart:getLocalCart(),
    totalamount:'',
    totalitem:'',
   
}
const Cartprovider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initial)
 const   displaycart=(id,amount,price,details)=>{
 dispatch({type : "addcart",payload:{id,price,amount,details}})
 
 }
 const remove =(id)=>{
 dispatch({type:"remove",payload:id})
 }
const cartRemover=()=>{
    dispatch({type:'cart_remover'})
}
const increasefunction=(id)=>{
    dispatch({type:'increase-amount',payload:id})
  }
  const decreasefunction=(id)=>{
    dispatch({type:'decrease-amount',payload:id})
  }
 useEffect(()=>{
    dispatch({type:'total-items'})
    localStorage.setItem('cartItem',JSON.stringify(state.cart))
 },[state.cart])
    return(
        <cartcontext.Provider value={{...state,displaycart, remove,cartRemover,increasefunction,decreasefunction}}>
            {children}
        </cartcontext.Provider>
    )
   
}

const useCart=()=>{
    return useContext(cartcontext)
}
export {cartcontext,Cartprovider,useCart}
