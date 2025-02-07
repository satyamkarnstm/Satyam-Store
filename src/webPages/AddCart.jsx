import React, { useState } from 'react'
import './cart.css'

import { useCart } from '../context/Cartcontext';
import Amount from './Amount';

function AddCart({details}) {
 const {id,price}=details
   const {displaycart }=useCart()
   
   const [amount,setAmount]=useState(1)
      const increaseFunction =()=>{
           setAmount(amount+1)
          if (amount>=5) {
            setAmount(5)
            alert("amonts should only between 1 to 5")
          }
      }
   
      const decreaseFunction =()=>{
          setAmount(amount-1)
          if (amount<=1) {
            setAmount(1)
            alert("amonts should only between 1 to 5")
          }
        }
   
  return (
    <div className='cart-design' >
   
    <Amount amount = {amount} decrease={decreaseFunction} increase={increaseFunction}/>
    <div></div>
  
    <button onClick={()=>displaycart(id,amount,price,details)} className='add-cart'>Add to Cart
    </button></div>
  )
}

export default AddCart