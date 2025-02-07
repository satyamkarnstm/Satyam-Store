import "./home.css";
import { NavLink } from "react-router";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi"

function Home() {
  
  return (
    <div className="main">
      <div className="first-row">
        <div>
         
            <h3>welcome to Satyam online store</h3>
          <p>Hii,<br/>
            here you can find all items of your need<br/>
            so enjoy shopping with us on our products page
          </p>
          <button>
          <NavLink to="/products" end>
             Go to   Products
            </NavLink>
          </button>
        </div>
        <div>
          
          <img src="./heropic.jpg" alt="pic"  className="hero-pic"/>
        </div>
      </div>
      <h1>Our Services</h1>
      <div className="services">
        <div>
            <h4>Free delivery</h4>
            <p>we provide free delivery on our all products</p>
            <CiDeliveryTruck className="icons" /> 
        </div>
        <div>
        <h4>Return in 7 days</h4>
       <p>we provide cash on delivery on our all products</p>
     
       <FiRefreshCw className="icons" />
        </div>
        <div>
            <h4>Cash on Delivery</h4>
            <p>We also provide cash on delivery service</p>
            <BsCashCoin className="icons" />
        </div>
        <div>
            <h4>Fast Services</h4>
            <p>Our all provided services are fast</p>
            <FaTruckFast className="icons"/>
        </div>

      </div>
    </div>
  );
}
export default Home;
