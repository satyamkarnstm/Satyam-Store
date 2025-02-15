import { useEffect } from "react";
import { useParams } from "react-router";
import { useProduct } from "../context/Context";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "./Rating";
import { NavLink } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import AddCart from "./AddCart";
import styled from "styled-components";


function SingleProduct() {
  const { id } = useParams();
 
  useEffect(() => {
    const a = `https://fakestoreapi.com/products/${id}`;
    fetchSingleData(a);
    // eslint-disable-next-line
  }, []);
  const { isloding, fetchSingleData, singleProducts } = useProduct();
 

  const { title, description, image, category, rating, price } = singleProducts;

  if (isloding) {
    return <p>...loading</p>;
  }
  return (
    <Wrapper><div> <NavLink to="/products" end>
    <FaArrowLeft className="arrow"/>
 </NavLink></div>
      <img src={image} alt="pic is loading" className="singimg" />
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
  <div>
  
    <AddCart details= {singleProducts}>hello</AddCart>
 
  </div>
    </Wrapper>
  );
}
export default SingleProduct;



const Wrapper = styled.section`
  .singimg{
    height: 500px;
    padding-top: 5px;
    width: 200px;
    
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


`