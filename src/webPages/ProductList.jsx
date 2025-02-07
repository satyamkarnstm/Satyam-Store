import { NavLink } from 'react-router';
import './product.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from './Rating';
import AddCart from './AddCart';

function ProductList(d) {
    
 const {title,price,category,image,rating,id}=d
    return(<div className='box'>
    <NavLink to={`/Product/${id}`}>
        <div >
         <h3 className='category'>{category}</h3>
         <img src={image}alt="loading" className='img'/>
        <div className='title'>{title}</div>
        <div className='price-box'>
        <span className='color' >Price</span>
        <span className='price'><FaIndianRupeeSign className='sign'/>{price}</span>
        </div>
        <div className='rating'>
        <span className='color'>Rating</span>
       
      <div className='rate'>  < Rating stars={rating.rate} review = {rating.count} className="rate"/></div>
        </div >
        </div>
        </NavLink>
        <div className='cart'>
          <AddCart  details= {d}/></div>
          </div>
    )
}

export default ProductList