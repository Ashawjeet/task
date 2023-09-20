import React, { useContext, useEffect, useState } from 'react';


import { useSelector } from 'react-redux';
import Slider from "react-slick";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./home.module.css";



import { Link } from "react-router-dom";

import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';






import { Swiper, SwiperSlide } from "swiper/react";

import { animateScroll as scroll } from 'react-scroll';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Musicpage from './music/Musicpage';
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {

  
 
   const images = [pic01,pic03,pic04,pic05,pic06,pic07,pic08]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  
 

  const searchQuery = useSelector((state) => state.searchQuery);
  const [filteredCards, setFilteredCards] = useState([]);

  

  return (
    <>
      <div className={Styles.sliderowp} >

        <div className={Styles.sliderp}
          
        >
          <Slider {...settings}>
            {images && images.map((image) => (
              <div key={image._id} className='adjustcarap' >
                <img src={image}
                  alt="Image 1"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    margin: 'auto',
                    filter: 'blur(5px)',
                  }}/>
                <img
                  src={image}
                  alt="Image 1"
                  className= {Styles.caraimg2}
                />
               
              </div>

            ))}
          </Slider>
        </div>
      </div>

    </>
  )
}

export default Home