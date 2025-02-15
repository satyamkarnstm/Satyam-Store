import { NavLink } from 'react-router';
//import './product.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from './Rating';
import AddCart from './AddCart';
import styled from 'styled-components';

function ProductList(d) {
    
 const {title,price,category,image,rating,id}=d
    return(
    <Wrapper>
    <div className='box'>
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
          </Wrapper>
    )
}

export default ProductList


const Wrapper= styled.section`
 a{
  text-decoration: none;
 }
  
.box{
  border:1px solid blue ;
 
  margin-bottom: 40px;
  height: 510px;
  
  
  background-color: rgb(119, 174, 174);
}
.img{
  height: 200px;
  width: 100%;
  
}
.title{
  height: 130px;
  color: #000;
  margin-bottom: 2px;
 
}
.category{
 text-align: center;
 color: #000;
}
.price-box{
 
  display: grid;
  padding: 2px;
  
  grid-template-columns:repeat(2,2fr);
 background-color: blueviolet;
 margin-bottom: 5px;
}
.price{
 text-align: end;
 
 color: #000;
}
.sign{
  height: 12px;
}

.rating{
  display: grid;
  grid-template-columns: repeat(2,2fr);
  background-color: blueviolet;
  margin-bottom: 5px;
  padding: 2px;
}
.rate{
  text-align: right;
  flex-grow: 1;
  color: black;
}

.chart{
  background-color: peru;
  margin-bottom: 5px;
}
.buy{
  background-color: rgba(227, 44, 44, 0.881);
  margin-bottom: 5px;
}


.color{
  color: #000;
}



`