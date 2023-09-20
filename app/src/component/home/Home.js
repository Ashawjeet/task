import React, { useContext, useEffect, useState } from 'react';
// import { SearchContext } from './SearchContext';
// import ScrollCarouselCard from './ScrollCarouselCard';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
// import { useTranslation } from 'react-i18next';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Import translation files
// import enTranslation from './locales/en.json';
// import hiTranslation from './locales/hi.json';

import { AiOutlineMail ,AiFillSkype ,AiFillYoutube } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import {  FaTumblr} from 'react-icons/fa';
    

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination } from "swiper";
import Styles from "./home.module.css";

import  adss from "./img/adss.png" ;
import asam from "../image/asam.jfif"
import oddisa from "../image/oddisa.jfif"
import andhra from "../image/andhra.jpg"
import list from "../image/list.jpg"
import charminar from '../pic/BannerTelangana.jpg';
import { Link } from "react-router-dom";

import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';


import w1 from "../images/wb1.jpg"
import w2 from "../images/wb2.jpg"
import w3 from "../images/wb3.jpg"
import w4 from "../images/wb4.jpg"

import r1 from "./img/r1.jpg"
import r2 from "./img/r2.jpg"
import r3 from "./img/r3.jpg"
import r4 from "./img/r4.jpg"
import ut1 from "./img/ut1.jpg"
import ut2 from "./img/ut2.jpg"
import ut3 from "./img/ut3.jpg"
import ut4 from "./img/ut4.jpg"

import kn1 from "./img/k1.jpg"
import kn2 from "./img/kn2.jpg"
import kn3 from "./img/kn3.jpg"
import kn4 from "./img/kn4.jpg"

import placeAssam from '../images/placeAssam.jpg';
import wildAssam from '../images/wildAssam.webp';
import templeAssam from '../images/templeAssam.jpg';
import hillAssam from '../images/hillAssam.webp';

import odibeach from '../images/odibeach.jpg'
import odihill from '../images/odihill.jpg'
import odiplace from '../images/odiplace.webp';
import oditemple from '../images/oditemple.jpg'


//andhra

import pics1 from '../pic/MuseumsTel.webp';
import pics2 from '../pic/templeTelanglana.jpg';
import pics3 from '../pic/ramuji.jpg';

//telangana

import tel1 from '../pic/PalacesTelanagana.jpg';
import tel2 from '../pic/WaterfallsTelangana.jpg';
import tel3 from '../pic/BannerTelangana.jpg';

//chhattisgarh
import chhattisgarh1 from '../Chhattisgarh/pic/Chitrakot_waterfalls.jpeg';
import chhattisgarh2 from '../Chhattisgarh/pic/EvnJ4pyVoAgF9_W.jpg';
import chhattisgarh3 from '../Chhattisgarh/pic/download.jpeg';




//goa

import goa1 from '../picc/p1.jpg';
import goa2 from '../picc/p2.jpg';
import goa3 from '../picc/p3.jpg';

//kerala
import kera1 from '../picc/p4.jpg';
import kera2 from '../picc/p5.jpg';
import kera3 from '../picc/p6.jpg';

//mp
import mp1 from '../mp/photos/mpWild.jpg';
import mp2 from '../mp/photos/mpmousem.jpg';
import mp3 from '../mp/photos/mppalce.jpg'

//maha
import maha1 from '../Maharastra/Photo/Victoria_Terminus,_Mumbai.jpg';
import maha2 from '../Maharastra/Photo/flimcity.jpg';
import maha3 from '../Maharastra/Photo/mahaBeaches.jpg';


//sikkim

import sik1 from '../Sikkim/img/pic001.jpg';
import sik2 from '../Sikkim/img/pic002.jpg';
import sik3 from '../Sikkim/img/pic004.jpg';

//tn
import tn1 from '../Tamil Nadu/img/pic0010.jpg';
import tn2 from '../Tamil Nadu/img/pic003.jpg';
import tn3 from '../Tamil Nadu/img/pic005.jpg';


//bihr

import bihar1 from "../images/bihar1.jpg"
import bihar2 from "../images/bihar2.jpg"
import bihar3 from "../images/bihar3.jpg"

//Andaman

import Andaman1 from "../Andaman/pic/360_F_397037457_aQaV8mq4VieHtt6OVdLMZw6StZeKSLtt.jpg"
import Andaman2 from "../Andaman/pic/andaman-nicobar-island-1.jpg"
import Andaman3 from "../Andaman/pic/andaman-nicobar-island-2.jpg"

//jharkhand
import khand from "../images/khand.jpg"
import khand2 from "../images/khand2.jpg"
import khand3 from "../images/khand3.jpg"

import aru1 from "../Arunachal Pradesh/aurnchalpic/Nuranang-Falls_2nd-mar.webp"
import aru2 from "../Arunachal Pradesh/aurnchalpic/temple.jpg"

import naga1 from "../Nagaland/nagapic/forest.jpg"
import naga2 from "../Nagaland/nagapic/lake.jpg"
import naga3 from "../Nagaland/nagapic/mounatin.png"

import { Swiper, SwiperSlide } from "swiper/react";

import { animateScroll as scroll } from 'react-scroll';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ScrollAd from './ScrollAd/ScrollAd';
import Musicpage from './music/Musicpage';
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {

  useEffect(() => {
    loadslider();
  }, [])
  const [images, setImages] = useState();
  console.log(images);
  const loadslider = async () => {

    const { data } = await axios.post(`http://192.34.63.158:4000/slider/getAll`,
    )
    console.log(data.status, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setImages(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  //  const images = [pic01,pic03,pic04,pic05,pic06,pic07,pic08]
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

  const card = [
    {
      name: "Andhra:Trip",
      price: "from 9,883 per adult",
      image: [pics1, pics2, pics3],
      link: 'andhra'
    },
    {
      name: "Arunachal Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [aru1, aru2, khand3],
      link: 'arunachalPradesh'
    },
    {
      name: "Assam:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'assam'
    },
    {
      name: "Bihar:Trip",
      price: "from 9,883 per adult",
      image: [bihar1, bihar2, bihar3],
      link: 'bihar'
    },
    {
      name: "Google",
      price: "from 9,883 per adult",
      image: "data:image/png;base64,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",
      link: 'mP'
    },
    {
      name: "Chhattisgarh:Trip",
      price: "from 9,883 per adult",
      image: [chhattisgarh1, chhattisgarh2, chhattisgarh3]
      ,
      link: 'Chhattisgarh'
    },
    {
      name: "Goa:Trip",
      price: "from 9,883 per adult",
      image: [goa1, goa2, goa3],
      link: 'goa'
    },
    {
      name: "Gujarat:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'Gujarat'
    },
    {
      name: "Haryana:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'assam'
    },

    {
      name: "Himachal Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'assam'
    },
    {
      name: "Jharkhand:Trip",
      price: "from 9,883 per adult",
      image: [khand, khand2, khand3],
      link: 'jhharkhand'
    },
  
    {
      name: "Karnataka:Trip",
      price: "from 9,883 per adult",
      image: [kn1, kn2, kn3, kn4],
      link: 'bangalore'
    },

 
    {
      name: "Kerala:Trip",
      price: "from 9,883 per adult",
      image: [kera1, kera2, kera3],
      link: 'kerala'
    },
    {
      name: "Madhya Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [mp1, mp2, mp3],
      link: 'mP'
    },
    {
      name: "Maharastra:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'maharashtra'
    },
    {
      name: "Manipur:Trip",
      price: "from 9,883 per adult",
      image: [mp1, mp2, mp3],
      link: 'mP'
    },
    {
      name: "Google",
      price: "from 9,883 per adult",
      image: "data:image/png;base64,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",
      link: 'mP'
    },

    {
      name: "Meghalaya:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'maharashtra'
    },
    {
      name: "Mizoram:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'maharashtra'
    },
    {
      name: "nagaland:Trip",
      price: "from 9,883 per adult",
      image: [naga1, naga2, naga3],
      link: 'Nagaland'
    },
    {
      name: "Oddisa:Trip",
      price: "from 9,883 per adult",
      image: [odibeach, odihill, odiplace, oditemple],
      link: 'odisha'
    },
    {
      name: "Punjab:Trip",
      price: "from 9,883 per adult",
      image: [odibeach, odihill, odiplace, oditemple],
      link: 'odisha'
    },
    {
      name: "Rajsthan:Trip",
      price: "from 9,883 per adult",
      image: [r1, r2, r3, r4],
      link: 'rajsthan'
    },
    
   
    {
      name: "Sikkim:Trip",
      price: "from 9,883 per adult",
      image: [sik1, sik2, sik3],
      link: 'sikkim'
    },
    {
      name: "Tamil Nadu :Trip",
      price: "from 9,883 per adult",
      image: [tn1, tn2, tn3],
      link: 'tamilNadu'
    },
    {
      name: "Telangana:Trip",
      price: "from 9,883 per adult",
      image: [tel1, tel2, tel3],
      link: 'telangana'
    },
    {
      name: "Tripura :Trip",
      price: "from 9,883 per adult",
      image: [tn1, tn2, tn3],
      link: 'tamilNadu'
    },
    {
      name: "Uttarakhand:Trip",
      price: "from 9,883 per adult",
      image: [ut1, ut2, ut3, ut4],
      link: 'uttarakhand'
    },
   
 
    {
      name: "Uttar Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'uttar'
    },
    {
      name: "West Bengal:Trip",
      price: "from 9,883 per adult",
      image: [w2, w1, w3, w4],
      link: 'westBengal'
    },
    {
      name: "Google",
      price: "from 9,883 per adult",
      image: "data:image/png;base64,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",
      link: 'mP'
    },
    {
      name: "Jammu & Kasmir:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Dadra and Nagar Haveli and Daman & Diu.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Ladakh.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Chandigarh.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Delhi.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Puducherry.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Lakshadweep:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Andaman and Nicobar Islands:Trip",
      price: "from 9,883 per adult",
      image: [Andaman1, Andaman2, Andaman3],
      link: 'Andaman'
    },
    {
      name: "Google",
      price: "from 9,883 per adult",
      image: "data:image/png;base64,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",
      link: 'mP'
    },
   

  ]

  console.log(localStorage)
  const ScrollCarouselCard = ({ name, price, link, image }) => {
    
if(name == 'Google'){
  return (
    <div className={Styles.scontainer}>
      <div className={Styles.scroll} style={{marginTop:100}}>
        <Link to={link}>
          <span>
            <Swiper pagination={{
              clickable: true,
            }} navigation={true} modules={[Navigation, Pagination]} className={Styles.mys}>

            
                  
                    <img  src='https://www.aceinfoway.com/blog/wp-content/uploads/2020/06/how-to-make-the-most-of-google-shopping-campaign.gif' className={Styles.imgs} />
                   

            </Swiper>


          </span>
          

        </Link>

      </div>
    </div>
  )
}else{

    return (
      <div className={Styles.scontainer}>
        <div className={Styles.scroll}>
          <Link to={link}>
            <span>
              <Swiper pagination={{
                clickable: true,
              }} navigation={true} modules={[Navigation, Pagination]} className={Styles.mys}>

                {image.map((image, index) => (
                  <div className={Styles.cardimg}>
                    <SwiperSlide>
                      <img key={index} src={image} alt={`Image ${index + 1}`} className={Styles.imgs} />
                    </SwiperSlide>
                  </div>


                ))}

              </Swiper>


            </span>
            <div className={Styles.textContainer}>
              <div className={Styles.carouselTextName}>
                <h2>{name}</h2>
              </div>
              <div className={Styles.carouselTextPrice}>
                <p>{price}</p>
              </div>
            </div>

          </Link>

        </div>
      </div>
    )
      }
  }

  const searchQuery = useSelector((state) => state.searchQuery);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const filtered = card.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchQuery]);

  




  return (
    <>
      <div className={Styles.sliderow} >

        <div className={Styles.slider}
          
        >
          <Slider {...settings}>
            {images && images.map((image) => (
              <div key={image._id} className='adjustcara' >
                <img src={`http://192.34.63.158:4000/slider/${image.image_url}`}
                  alt="Image 1"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    margin: 'auto',
                    filter: 'blur(5px)',
                  }}/>
                <img
                  src={`http://192.34.63.158:4000/slider/${image.image_url}`}
                  alt="Image 1"
                  className= {Styles.caraimg2}
                />
               
              </div>

            ))}
          </Slider>
        </div>
      </div>

     
 
    
      <ScrollAd name='home' />
      

      <div className={Styles.socialIcons}>
        <a href='https://www.facebook.com/people/Journey-Recall-India/61550265616986/?sk=about'><FaFacebookSquare style={{ color: 'blue' }} /></a>
        <a href='https://www.instagram.com/rjoindia/?next=%2F' style={{ textDecoration: 'none' }}><FaInstagramSquare className={Styles.myInsta} /></a>
        <a href='https://twitter.com/JROindia'><FaTwitterSquare style={{ color: 'blue' }} /></a>
        <a href='https://api.whatsapp.com/send/?phone=070935 81569&text=Hi&app_absent=0'><FaWhatsappSquare style={{ color: 'green' }} /></a>

        <a href='https://www.facebook.com/people/Journey-Recall-India/61550265616986/?sk=about'><AiFillYoutube style={{ color: 'blue' }} /></a>
        <a href='https://www.instagram.com/rjoindia/?next=%2F' style={{ textDecoration: 'none' }}><AiFillSkype className={Styles.myInsta} /></a>
        <a href='https://twitter.com/JROindia'><BsTelegram style={{ color: 'blue' }} /></a>
        <a href='https://api.whatsapp.com/send/?phone=070935 81569&text=Hi&app_absent=0'><AiOutlineMail style={{ color: 'green' }} /></a>
        <a href='https://twitter.com/JROindia'><FaTumblr style={{ color: 'blue' }} /></a>
       
      </div>

 

      




      <div>
        <div className='scrollHeading3'>

        </div>
        <div id='scroll3BtnDiv' >
          {/* <span id='scroll3Btn'>Sell More <FaLongArrowAltRight id='arrowicon'/></span> */}
        </div>
        <div className={Styles.lastcard}>
          {filteredCards.map((card) => (
            <ScrollCarouselCard key={card.name} {...card} />
          ))}
        </div>
      </div>







      <div className={Styles.container}>



        <br />
        <div className={Styles.list}>
          <div className={Styles.lefta}>
            <div className={Styles.text}>
              <h3>Get out there</h3>
              <p>Best of the tours, attractions & activities you won't to miss.</p>
              <button>See the list</button>
            </div>
          </div>
          <div>
            <img width="100%" height='100%' src={list} />
          </div>
        </div>
      </div>




    </>
  )
}

export default Home