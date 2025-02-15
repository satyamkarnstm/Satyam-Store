//import "./navbar.css";
import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import {useState } from "react";
import { useCart } from "../context/Cartcontext";
import styled from "styled-components";


function Navbar() {
   const [menu, setMenu]=useState(false)
   const { totalitem}=useCart()
   const mobileMenu=()=>{
      setMenu(!menu)
   }

  return (
   <Wrapper>
    <div className=" header">
      <CiMenuBurger className="menu-icon"onClick={mobileMenu} />
      <span className="logo">SATYAM ONLINE STORE</span>
    
      <span className={menu ?" active-header" :"non-active"}>
       
        <ul className="nav-ul" type='none'>
            <li onClick={mobileMenu}>
            <NavLink to="/" end>
               HOME
            </NavLink>
            </li>
            <li onClick={mobileMenu}>
            <NavLink to="/products" end>
               PRODUCTS
            </NavLink>
            </li>
            <li onClick={mobileMenu}>
            <NavLink to="/contact" end>
               CONTACT
            </NavLink>
            </li>
            <li onClick={mobileMenu}>
            <NavLink to="/cart" end>
               <FaShoppingCart />
               <sub id="cartNumber">{totalitem}</sub>
            </NavLink>
            </li>
           
            <li onClick={mobileMenu}>
            <NavLink to="/login" end>
               LOGIN
            </NavLink>
            </li>  
       
       
      </ul>
      </span>
    </div>
    </Wrapper>
  );
}
export default Navbar;

const Wrapper= styled.section`
 position: sticky;
 top: 0;
   li {
  color: #e72727;

  padding: 0px 10px;
  flex-grow: 1;
}
.nav-ul {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: justify;
  text-decoration-style: none;
  margin-left: 25%;
  text-decoration: none;
  padding-left: 13px;
}
.logo {
  margin-left: 2px;
  color: #d24545;
  display: inline;

}
.header {
  background-color: antiquewhite;
  margin-top: 0%;
 
  width: 100%;
  height: 50px;
  display: inline-block;
}

#cartNumber {
  color: aquamarine;
  border: 1px;
  border-radius: 50%;
  background-color: #6c573b;
  padding: 2px;
  width: 10px;
  height: 10px;
  margin: 0px;
}
.menu-icon {
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
  display: none;
  border: 1px solid black;
  height: 25px;
  width: 25px;
}

@media only screen and (max-width: 768px) {
  .active-header {
    width: 200px;

    height: 400px;
background-color: rgb(174, 224, 224);
position: absolute;
left: 0px;
top: 50px;
z-index: -1;
    margin-top: 0;
    display: block;
  }
  .nav-ul {
    display: none;
  }
  .logo {
    display: inline;
    text-align: center;
    color: blue;
  }
  .menu-icon {
    display: inline;
  }
  .active-header ul {
    display: block;
    text-align: left;
    margin-left: 2px;
    padding-left: 2px;
    width: 35%;
    margin: 0;
    margin-right: 0;
  }
  .active-header li {
    display: block;
    text-align: left;
    color: red;
    margin-bottom: 25px;
  }
  .header {
    height: 50px;
    position: sticky;
    top: 0;
  }
  .non-active{
    margin: 0;
  }
}
a {
  text-decoration: none;
}
.greeting{
  margin-left: 5px;
}



`

