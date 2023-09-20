import React from 'react'
import './Fotter.css';

import Styles from '../home/home.module.css'
import { AiOutlineMail ,AiFillSkype ,AiFillYoutube } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import {  FaTumblr} from 'react-icons/fa'; 
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import loogo from './pic/shivila.png';


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popupad from './popupad/Popupad';

const Footer = () => {
  // scroll up 

  const [turn , setTurn] = useState(true)
  const [transformUp, setTransformUp] = useState(false)
 

   const  handlepopup = (()=>{
    setTransformUp(false);
    setTimeout(() => {
      setTurn(false)

    }, 1000);
  })  
 setInterval(() => {
   
  setTransformUp(true);
  setTurn(true);
   }, 5000);

  return (
    <>


      <div className='footerr'>
        <div className='mainFooter'>
          <div className='footerDiv'>
          
          <h3>About Us</h3>
              <div style={{paddingBottom:'10px'}}>
              <p style={{ textDecoration: "none", color: "black" }}>In our, we believe that travel has the power to transform lives. It's not just about visiting new places; it's about immersing yourself in new cultures, forming lasting connections, and creating memories that will last a lifetime. We're committed to responsible tourism, and we work closely with local communities to ensure our impact is positive and sustainable.</p>
              </div> 

          </div>
          <div className='footerDiv'>
            <h3>Information</h3>
            <a style={{ textDecoration: "none", color: "black" }} href='/'>Home</a>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/Advanture'>Adventure</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/feeds'>Feeds</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/about'>About us</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/contact'>Contact us</a></p>


          </div>
          <div className='footerDiv'>
            <h3> Expolre</h3>
            <p> Write a review</p>
            <p>Add a Place</p>
            <p>Join</p>
            <p>Travellers' Choice</p>
            <p>GreenLeaders</p>
          
          </div>

          <div style={{display:'flex' , flexDirection:'column'  }} className='footerDiv'>
          
            <h3 style={{display:'flex' }}>Subscribe to newaletter</h3>
            <input className='subscri' placeholder='Enter Email Address'></input>
            <button style={{ maxWidth:'100px' ,backgroundColor: 'rgb(239, 47, 47)'}} className='subscri' type='button'>Subscribe </button>
           <br/>
           {/* <br/> */}
            <div className='adGrid'>
            <a href='https://www.facebook.com/people/Journey-Recall-India/61550265616986/?sk=about'><FaFacebookSquare style={{ color: 'blue' ,fontSize: '32px' }} /></a>
        <a href='https://www.instagram.com/rjoindia/?next=%2F' style={{ textDecoration: 'none' }}><FaInstagramSquare className={Styles.myInsta} style={{ color: 'pink' ,fontSize: '32px' }}/></a>
        <a href='https://twitter.com/JROindia'><FaTwitterSquare style={{ color: 'blue' ,fontSize: '32px'}} /></a>
        <a href='https://api.whatsapp.com/send/?phone=070935 81569&text=Hi&app_absent=0'><FaWhatsappSquare style={{ color: 'green' ,fontSize: '32px'}} /></a>

        <a href='https://www.facebook.com/people/Journey-Recall-India/61550265616986/?sk=about'><AiFillYoutube style={{ color: 'blue',fontSize: '32px' }} /></a>
        <a href='https://www.instagram.com/rjoindia/?next=%2F' style={{ textDecoration: 'none' }}><AiFillSkype className={Styles.myInsta} style={{ color: 'blue' ,fontSize: '32px' }}/></a>
        <a href='https://twitter.com/JROindia'><BsTelegram style={{ color: 'blue' ,fontSize: '32px'}} /></a>
        <a href='https://api.whatsapp.com/send/?phone=070935 81569&text=Hi&app_absent=0'><AiOutlineMail style={{ color: 'green' ,fontSize: '32px'}} /></a>
        <a href='https://twitter.com/JROindia'><FaTumblr style={{ color: 'blue',fontSize: '32px' }} /></a>
       
            </div>

            </div>
        </div>

      </div>





      <div className='lowerFotter' >
        <a href="https://shivila.com/" target='_blak'
          class="logo">
          <img className='imgf' src={loogo} alt="Logo" />
        </a>
        <div class="copy-right">
          Designed by SHIVILA TECHNOLOGIES PRIVATE LIMITED.
        </div>
      </div>
      
      <div class="image-grid">
  <div class="grid-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvZ8twlP-g_TMwBe4IQ-y-NQu4P-Sqkkvzq5EW03PbYFf8GSeLBajoxopfSTLpRracNo&usqp=CAU" alt="Image 1" className='footer1' />
  </div>
  <div class="grid-item">
    <img src="https://lh3.googleusercontent.com/QJlZSMW4Jib2Hs5cFmQfDZSZNLL5_pfj0HS2JlddV8vBkUJir704zWtMq-wMsWpNDuhQWVYjnDTyIr6rLo8rGbUwEpBKjSGK6km2Ow=s900" alt="Image 2" className='footer1' />
  </div>
  <div class="grid-item">
    <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/promod-clothing-end-of-season-sale-upto-50-off-ad-delhi-times-21-06-2019.png" alt="Image 3" className='footer1'/>
  </div>
  <div class="grid-item">
    <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/08/central-brand-jaipur-one-day-sale-everything-at-50-off-ad-dainik-bhaskar-jaipur-15-07-2017-252x300.jpg" alt="Image 4" className='footer1'/>
  </div>
  
</div>
 
      <br />
      <br />
      <Popupad/>
      
    </>
  )
}

export default Footer