
import { useCart } from "../context/Cartcontext"
import './cart.css'
import CartDesign from "./CartDesign";
function Chart() {
const {cart,cartRemover}=useCart()


if (cart.length===0) {
    return <div className="empty">no any item in the cart</div>
}

    return(
        <div>
            
         
                <div  className="cart-box" >
                <h3>items</h3>
                <h3>title</h3>
                <h3>price</h3>
                <h3>amount</h3>
                <h3>total</h3>
                <h3>delete</h3>
            </div>
           { cart.map((c)=>(
            <CartDesign key={c.id} { ...c}/>))
             }
       
        <button onClick={cartRemover}> Clear All</button>
        </div>
    )
}
export default Chart