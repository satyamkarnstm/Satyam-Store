import "./navbar.css";
import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import {useState } from "react";
import { useCart } from "../context/Cartcontext";


function Navbar() {
   const [menu, setMenu]=useState(false)
   const { totalitem}=useCart()
   const mobileMenu=()=>{
      setMenu(!menu)
   }

  return (
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
  );
}
export default Navbar;
