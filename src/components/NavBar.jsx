import React from "react"
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({cartNum}) {
    
  return (
      
    <div className="NavBar">
         <h2>HANDMADE HAT SHOP</h2>
      <Link to="/">SHOP ONLINE</Link>
      <Link to="/cart" className="cart-items">
        <BsCartFill />
        <p className="cart-num">{cartNum}</p>
      </Link>

    </div>
  )
}

export default NavBar
