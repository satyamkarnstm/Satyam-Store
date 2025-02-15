import { useCart } from "../context/Cartcontext";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { NavLink } from "react-router";


function CartDesign() {
    const {remove,increasefunction,decreasefunction,cart,cartRemover}=useCart()
  
  if (cart.length===0) {
    return <div className="empty">no any item in the cart</div>
}

  return (
   
      <Wrapper>
         <div  className="cart-box" >
                <h3>items</h3>
                <h3>title</h3>
                <h3>price</h3>
                <h3>amount</h3>
                <h3>total</h3>
                <h3>delete</h3>
            </div>
            { cart.map((c)=>(
           
         <div  className="cart-box" key={c.id}>
        <img src={c.image} className="cart-pic" alt="pic"/>
        <NavLink to={`/Product/${c.id}`}>
        <p className="cart-item">{c.title.substr(0,20)}...</p>
        </NavLink>
        <p className="cart-item">{c.price}</p>
         <div>
        
             <CiSquarePlus onClick={()=>increasefunction(c.id)}/>
        <p className="cart-item">{c.amount}</p>
      
        <CiSquareMinus onClick={()=>decreasefunction(c.id)}/>  
        </div>
        <p className="cart-item">{c.amount*c.price}</p>
        <FaTrash onClick={()=>remove(c.id)} className="trash"/>

        </div>
    ))
}
      
      <button onClick={cartRemover}> Clear All</button>        
      
       </Wrapper>
      
  )
}

export default CartDesign


const Wrapper = styled.section`
 .cart-pic{
    height: 50px;
    width: 25px;
   
}
.cart-box{
    display: grid;
 
   
    grid-template-columns:repeat(6,2fr);
  
    text-align: center;
    border: 1px solid blueviolet;
}
.add{
    margin-top:76  ;
    color: rebeccapurple;
}
.trash{
    color: red;
    margin: auto 0;
}
.cart-item{
    margin: auto 0;
}
.empty{
    margin: 50px 100px 500px 100px  ;
    font-size: 100px;
   
}
.cart-amount{
    display: grid;
    
   
    grid-template-columns:repeat(3,2fr);
}

.add-cart{
    margin: 0;
    text-align: right;
    cursor:pointer;
    background-color: rgb(100, 159, 235);
   
    border: 1px;
    padding: 0px;
}   .cart-box{
    display: grid;
 
   
    grid-template-columns:repeat(6,2fr);
  
    text-align: center;
    border: 1px solid blueviolet;
}


@media only screen and (max-width: 768px) {
.cart-box{
    grid-template-columns:repeat(4,2fr);
}
} 


`