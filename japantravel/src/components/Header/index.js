import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function Header() {
const reserveSize = useSelector(state => state.reserve);



 return (
   <header className='header'>
       <div className='logomarca'>
        <Link to='/'>  <h3>ジャスミン観光</h3></Link>
     </div>
         <ul>
            <Link to='/destinations'><li>Destinations</li></Link>
            <Link to='/promotions'><li>Promotions</li></Link>
            <Link to='/signin'><li>SignIn/SignUp</li></Link> 
             <Link to='/carrinho'><li className='carrinho'><span> +{reserveSize.length} </span><MdShoppingCart color='#960019' size={20}/>
             
             </li></Link>
         </ul>
   </header>
 );
}