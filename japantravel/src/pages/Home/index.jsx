import React from 'react';
import './home.css';
import Header from '../../components/Header';
import logo from '../../assets/japao.svg';
import { GiInfinity } from "react-icons/gi";
import foto from '../../assets/japonesa.jpg';
import Footer from '../../components/Footer';

export default function Home() {
 return (
  
   <div className='contain'>
   <Header/>
   <div className='imagem'>
    <img src={ logo } alt='imagem bandeira do Japão'/>
  </div>

   <br/>
    <div className='start-text'>
      <br/>
      <div className='titulo'>
    <h6>About us</h6>
    <h1>Yasmine tour</h1>
    <hr/>
    
    </div>
    <div className='text'>
    <span>Yasmine tour é uma agência de viagens há anos no mercado.<br/>
    Nós trabalhamos para que você tenha uma experiência única.<br/></span>
    <span>Na Yasmine Tour trabalhamos com profissionalismo e ética<br/>
    assegurando seus benefícios com essa experiência única, linda e energizante<br/>
    As maravilhas do Japão te aguardam na maior agência de viagens. </span>
    </div>
    <div className='number'>
      <h2> 15 </h2> <h2>2</h2> <h2><GiInfinity size={60}/></h2>
      </div>
      <div className='success'>
      <span> dias de sucesso</span> <span>milhões de clientes</span> <span>satisfação</span>
      </div>
      <div className='escrita'>
      <span>有</span>
      <span>り</span>
      <span>難</span>
      <span>い</span>
      </div>
      <div className='japonesa' loading='lazy'>
     <img src={foto} alt='japonesa na rua'/>
     </div>
     </div>
     <footer>
       <Footer/>
     </footer>
     </div>
 );
}
