import React from 'react';
import './destinations.css';
import tokyo from '../../assets/tokyo.jpg';
import photo from '../../assets/hakone.jpg';
import osaka from '../../assets/osaka.jpg';
import fuji from '../../assets/fuji.jpg';
import Header from '../../components/Header';
import sensoji from '../../assets/sensoji.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function Destinations() {
 return (
   <div className='pop'>
     <Header/>
   <div className='titulo1' >
   <h1>Popular Destinations</h1>
   <hr/>
   <div className='fotos'>
    <img src={tokyo} alt='Tokyo'/>
   
    <img src={photo} alt='Hakone'/>
   
    <img src={osaka} alt='Osaka'/>
    
    <img src={fuji} alt='Fuji'/>
    
    </div>
    <div className='japao'>
    <span>無</span>
    <span>事</span>
    <span>に</span>
    </div>
   </div>
<div className='Tokyo'>
<div className='tk-title'>
<h1>Templo Sensõ-ji</h1>
<hr/>
</div>
<div className='tk-txt'>
<span>Também conhecido como Templo de Asakusa,<br/>
é um templo budista japonês antigo localizado em<br/>
Asakusa, Tóquio.</span>
<br/>
<span>O templo é dedicado à Kuan Yin, a bodisatva<br/>
da compaixão, é o recinto espiritual mais visitado<br/>
no mundo, com mais de 30 milhões de visitantes anualmente</span>
</div>
<div className='tk-img'>
<img src={sensoji} alt='Sensõ Ji' />
</div>
</div>
<div className='tk-jp'>
<span>東</span>
<span>京</span>
<span>都</span>
</div>
<Link to='/promotions'><button className='btn-tk'>Conheça mais</button></Link>

<footer>
<Footer/>
</footer>
</div>

)}