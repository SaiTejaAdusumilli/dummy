import React from 'react';
import '../components/component.css';
import search from '../Assets/Group 35.svg'
import {Idata} from '../components/interfaces'

interface Iprops{
    data:Idata

}
const Main_Checkout  : React.FC<Iprops> = ({data}) => {
    return (
        <div className="cart_details">
                {
                Object.entries(data).map(([key, val]) => 
                    <h4 key={key}>{key}: {val}</h4>
                )
            }     
            <div>
            <button> GO TO Checkout</button></div>        
            </div>
       
       
    )
  }
  export default Main_Checkout