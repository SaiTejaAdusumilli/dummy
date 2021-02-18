import React from 'react';
import logo from '../Assets/Logo-2.png'
import cart from '../Assets/shopping-cart.svg'
import profile from '../Assets/noun_profile_2068277.svg'
import '../components/component.css';
const Head = () => {
    return (
      <header className="header">
        <div>
          <a  href="#"><img src={logo} ></img></a>
        </div>
        <div className="logo">
          <a  href="#"><p><b>COURSES</b></p></a>
          <a   href="#"><p>MY WISHLIST</p></a>
          <a  href="#"><img src={cart} style={{marginTop:"10px"}}></img></a>
          <a  href="#"><img src={profile} style={{marginTop:"10px"}}></img></a>
        </div>
      </header>
    )
  }
  export default Head