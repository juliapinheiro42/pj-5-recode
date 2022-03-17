import React from 'react';
import './footer.css';
import tower from '../../assets/tower.jpg';

export default function Footer() {
 return (
   <footer className='footer'>
    <div className='footer-img'>
     <img src={tower} alt="torre de Tókio"/>
     <hr/>
     <h4>東京タワー</h4>
    </div>
    <div className='explore'>
        <h3>EXPLORE</h3>
        <a>Tokyo</a>
        <a>Kyoto</a>
        <a>Yokohama</a>
        <a>Osaka</a>
        <a>Sapporo</a>
        <a>Nara</a>
        <a>Kagoshima</a>
    </div>
    <div className='about-footer'>
        <h3>ABOUT</h3>
        <a>Who we are</a>
        <a>Team</a>
        <a>Blog</a>
        <a>News</a>
        <a>Corporate</a>
    </div>
    <div className='help'>
        <h3>HELP</h3>
        <a>Costume Support</a>
        <a>FAQs</a>
        <a>COVID</a>
    </div>
   </footer>
 );
}