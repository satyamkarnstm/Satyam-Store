import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartRemover, decreaseAmount, deleteAction, increaseAmount } from "../store/slices/cartSlice";


function CartDesign() {
      const dispatch = useDispatch()
    const data = useSelector((state)=>{
     
        return state.carts
    })
    
    localStorage.setItem('cart',JSON.stringify(data.cart))

   
    if (data.cart.length===0) {
        return  <h2  style={{textAlign:"center",}}>no any item in the cart</h2>
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
            { data.cart.map((c)=>(
           
         <div  className="cart-box" key={c.id}>
        <img src={c.image} className="cart-pic" alt="pic"/>
        <NavLink to={`/Product/${c.id}`}>
        <p className="cart-item">{c.title.substr(0,20)}...</p>
        </NavLink>
        <p className="cart-item">{c.price}</p>
         <div>
        
             <CiSquarePlus onClick={()=>dispatch(increaseAmount(c.id))}/>
        <p className="cart-item">{c.quantity}</p>
      
        <CiSquareMinus onClick={()=>dispatch(decreaseAmount(c.id))}/>  
        </div>
        <p className="cart-item">{(c.quantity*c.price).toFixed(2)}</p>
        <FaTrash onClick={()=>dispatch(deleteAction(c.id))} className="trash"/>

        </div>
    ))
   
}
      <div className="as">
      <button className="removal" onClick={()=>dispatch(cartRemover())}> Clear All</button>        
      </div>
     
       </Wrapper>
      
  )
}

export default CartDesign


const Wrapper = styled.section`
a{
  text-decoration: none;
 }
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
    margin-left: 45%;
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
.removal{
    background-color: #eca2a2;
   
}
.as{
    text-align: right;
    margin-right: 10px;
    margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
.cart-box{
    grid-template-columns:repeat(4,2fr);
}
} 


`