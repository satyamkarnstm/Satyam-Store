import { useEffect } from "react";
import { useParams } from "react-router";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "./Rating";
import { NavLink } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "../store/slices/SingleDataSlice";
import { addCart } from "../store/slices/cartSlice";


function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleData( `https://fakestoreapi.com/products/${id}`))
   
  }, [dispatch,id]);
  const data= useSelector((state)=>{
   
       return state.SingleData
   })
  const { title, description, image, category, rating, price } = data.singleProducts

  if (data.loading) {
    return <h2  style={{textAlign:"center",}}>loading...</h2>
    
  }
  if (data.error!=null) {
    return <h2  style={{textAlign:"center",}}>{data.error}</h2>
    
  }

 
  return (
    <Wrapper><div> <NavLink to="/products" end>
    <FaArrowLeft className="arrow"/>
 </NavLink></div>
  <div className="img-box">
      <img src={image} alt="pic is loading" className="singimg" />
      </div>
      <h2>{title} </h2>

      <p>{description}</p>
      <h3>Category : {category} </h3>

      {rating && (<div>
        <div className="star-rate">
        
          <h4 className="singrate">Rating: </h4>
          <Rating stars={rating.rate} review={rating.count} />
          </div>
          <div>
          <span className="abc">({rating.count} costumer reviews )</span>
        </div></div>
      )}

      <div className="star-rate">
       
        <h4>Price:</h4>
        <span className="singprice-box">
          <FaIndianRupeeSign className="singsign" />
          <h4>{price}</h4>
        </span>
      </div>
 
     <div className="bp">
     <button className="addcart" onClick={()=>dispatch(addCart(data.singleProducts))} > ADD TO CART
                 </button>
    </div>
 
    </Wrapper>
  );
}
export default SingleProduct;



const Wrapper = styled.section`
  .singimg{
    height: 500px;
    padding-top: 5px;
    width: 75%;
   
    
}
.star-rate{
    display: flex;
    margin-right: 5px;
}
.singrate{
    margin: 0;
    padding-right: 10px;
}
.singprice-box{

padding: 1px;
width: 80px;

margin-left: 5px;

}
.singsign{
    margin-top: 25px;
    height: 12px;
}
.arrow{
    height: 50px;
    margin: 10px;
}
h4{
  display: inline;
}
.abc{
  display: inline;
}
.add{
   
    text-align: center;
   background-color: blueviolet;
   margin: auto ;
}
.addcart{
 
  width: 25%;
 height: 50px;
  background-color: #c1acd6;
  border-radius: 10px;
  

}
.bp{
  text-align: center;
  margin-bottom: 20px;
}
.img-box{
  margin:0 auto;
 
  text-align: center;
}
`