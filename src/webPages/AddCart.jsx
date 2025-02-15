import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import styled from 'styled-components';
import { useCart } from '../context/Cartcontext';


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
    <Wrapper>
    <div className='cart-design' >
    <div>
      <FiMinusCircle onClick={decreaseFunction}/>
    {amount}
    
    <FiPlusCircle onClick={increaseFunction} />
    </div>
   
    
   
  
    <button onClick={()=>displaycart(id,amount,price,details)} className='add-cart'>Add to Cart
    </button></div>
    </Wrapper>
  )
}

export default AddCart


const Wrapper=styled.section`
  .cart-design{
    display: grid;
    
   background-color: blueviolet;
    grid-template-columns:repeat(2,2fr);
}

`