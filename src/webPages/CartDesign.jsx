
import { useCart } from "../context/Cartcontext";
import './cart.css'
import { FaTrash } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { NavLink } from "react-router";

function CartDesign(c) {
    const {remove,increasefunction,decreasefunction}=useCart()
  let  {id,title,amount,image,price}=c

  return (
   
      
         <div  className="cart-box">
        <img src={image} className="cart-pic" alt="pic"/>
        <NavLink to={`/Product/${id}`}>
        <p className="cart-item">{title.substr(0,20)}...</p>
        </NavLink>
        <p className="cart-item">{price}</p>
         <div>
        
             <CiSquarePlus onClick={()=>increasefunction(id)}/>
        <p className="cart-item">{amount}</p>
      
        <CiSquareMinus onClick={()=>decreasefunction(id)}/>  
        </div>
        <p className="cart-item">{amount*price}</p>
        <FaTrash onClick={()=>remove(id)} className="trash"/>
      
             
       </div>
      
  )
}

export default CartDesign