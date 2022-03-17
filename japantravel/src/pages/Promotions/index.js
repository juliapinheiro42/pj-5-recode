import React, { useState, useEffect } from 'react';
import './promotions.css';
import Header from '../../components/Header';
import api from '../../services/api';
import { FaCartPlus } from "react-icons/fa";
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';


export default function Promotions() {
 const [trips, setTrips] = useState([]);
 const dispatch = useDispatch();


useEffect(()=>{
  async function loadApi(){
    const response = await api.get('trips');
    setTrips(response.data)
  }
 loadApi();
},[]) 

function handleAdd(trip){
  dispatch({
    type: 'ADD_RESERVE',
    trip
    
  })
}

  return (
   <div className='promo'>
    <Header/>
    <div className='titulo2'>
     <h2>Viaje com a gente!</h2>
     <span>Conheça nossos pacotes de viagens <br/>
     embarque nessa aventura!</span>
    </div>
    <div className='box'>
       {trips.map(trip =>(
         <li key={trip.id}>
           <div className='promo-img'>
         <img src={trip.image} alt={trip.title}/>
         </div>
         <div className='status'>
         <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
         <button type='button' onClick={()=> handleAdd(trip)}>
           Comprar
          <FaCartPlus size={20} color='#960019'/>
         </button>
         </div>
         </li>
       ))} 
    </div>
    <footer>
      <Footer/>
    </footer>
   </div>
 );
}