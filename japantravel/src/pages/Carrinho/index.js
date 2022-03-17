import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './carrinho.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MdDelete } from 'react-icons/md'


export default function Carrinho() {
  const reserves = useSelector(state => state.reserve);
    const dispatch = useDispatch();

function handleRemove(id){
  dispatch({
    type: 'REMOVE_RESERVE',
    id,
  })
}

 return (


    <div className='container-center'>
        <Header/>
        <div className='title'>
    <h1>Você solicitou {reserves.length} reservas</h1>
    </div>
  {reserves.map(reserve =>(
    <div className='reservas-center'>
    <div className='reservas' key={reserve.id}>
      <img src={reserve.image} alt={reserve.title}/>
      <strong>{reserve.title}</strong>
      <span>Quantidade: {reserve.amount}</span>
      <button type='button' onClick={()=> handleRemove(reserve.id)}>
      <MdDelete color='#f2f2f2'/>
      </button>
      </div>
      </div>
  ))}
    

    <button type='button' className='btn-rsv'>Solicitar reservas</button>
    <footer className='foot'>
      <Footer />
    </footer>
   </div>
 );
}