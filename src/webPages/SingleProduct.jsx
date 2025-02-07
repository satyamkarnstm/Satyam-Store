import { useEffect } from "react";
import { useParams } from "react-router";
import { useProduct } from "../context/Context";
import "./singleProduct.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "./Rating";
import { NavLink } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import AddCart from "./AddCart";


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
    <div><div> <NavLink to="/products" end>
    <FaArrowLeft className="arrow"/>
 </NavLink></div>
      <img src={image} alt="pic is loading" className="singimg" />
      <h2>{title} </h2>

      <p>{description}</p>
      <h3>Category : {category} </h3>

      {rating && (
        <div className="star-rate">
        
          <h4 className="singrate">Rating: </h4>
          <Rating stars={rating.rate} review={rating.count} />
          <span>({rating.count} costumer reviews )</span>
        </div>
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
    </div>
  );
}
export default SingleProduct;
