import React from 'react';
import '../components/component.css';
import search from '../Assets/Group 35.svg'
import {Idata} from '../components/interfaces'



const Checkout  =() => {
    return (
        <div>
            <form className="search-checkout">
                <input type="text" placeholder="Search.." name="search"/><button type="submit"><img src={search}/></button>
            </form>
            <div className="cart_details">
                <h4 style={{textAlign:"center"}}>Your Cart Details</h4>
                <hr></hr>
                   
            </div>
        </div>
       
    )
  }
  export default Checkout