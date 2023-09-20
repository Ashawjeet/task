import React, { useEffect, useState } from "react";
import './About.css';

import AmazingT from './iconss/why1_hover.png';
import Discoer from './iconss/why2_hover.png';
import BookYourTip from './iconss/why3_hoverb.png';
import niceSupport from './iconss/why4_hoverbb.png';

import Aman from './picture/aman.jpeg';
import axios from "axios";


const About = () => {
  const [data, setData] = useState();
  const [dataOffer, setDataOffer] = useState();

  useEffect(() => {
    loadTeam();
    loadOffer();
  }, [])
  const loadTeam = async () => {

    const { data } = await axios.post(`http://192.34.63.158:4000/about/team/getAll`,
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setData(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  const loadOffer = async () => {

    const { data } = await axios.post(`http://192.34.63.158:4000/about/offer/getAll`,
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setDataOffer(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  const flightLoading = 90;
  const hotelLoading = 87;
  const carLoading = 60;
  const cruisesLoading = 55;

  const calculateProgressBarWidth = (loading) => {
    return {
      width: `${loading}%`,
    };
  };

  return (
    <div className="about-contain">

      <h1>WHY WE ARE THE BEST</h1>
      <p id="para" style={{ textAlign: "start" }}>Tripadvisor, the world's largest travel platform*, helps 463 million travelers each month** make every trip their best trip. Travelers across the globe use the Tripadvisor site and app to browse more than 859 million reviews and opinions of 8.6 million accommodations, restaurants, experiences, airlines and cruises. Whether planning or on a trip, travelers turn to Tripadvisor to compare low prices on hotels, flights and cruises, book popular tours and attractions, as well as reserve tables at great restaurants. Tripadvisor, the ultimate travel companion, is available in 49 markets and 28 languages.</p>

      <div className="div1">

        {dataOffer && dataOffer.map((i) => (
          <div className="uarebest">
            <img src={`http://192.34.63.158:4000/offer/${i.logo}`} alt="" id="team" />
            <h4>{i.title}</h4>
            <p>{i.des}</p>
          </div>
        ))}
        {/* <div className="uarebest">
          <img src={AmazingT} alt="" className="AboutIconss" />
          <h3>Amazing Travel</h3>
          <p> Experience breathtaking destinations and create unforgettable memories with our amazing travel packages. Discover new cultures, indulge in delicious cuisines, and explore the world like never before.</p>
        </div>

        <div className="uarebest">
          <img src={Discoer} alt="" className="AboutIconss" />
          <h3>Discover</h3>
          <p> Unearth hidden gems and exciting adventures as you embark on a journey of discovery. Our expert guides will lead you to the most captivating places, giving you a unique and immersive travel experience.</p>
        </div>

        <div className="uarebest">
          <img src={BookYourTip} alt="" className="AboutIconss" />
          <h3>Book Your Trip</h3>
          <p>Planning your dream vacation has never been easier. Choose from a wide range of customizable travel packages, flights, and accommodations. Book your trip with us and get ready to embark on an unforgettable adventure.</p>
        </div>

        <div className="uarebest">
          <img src={niceSupport} alt="" className="AboutIconss" />
          <h3>Nice Support</h3>
          <p>Our dedicated support team is here to assist you at every step of your journey. From pre-trip inquiries to on-the-road support, we are committed to ensuring you have a smooth and enjoyable travel experience.</p>
        </div> */}

      </div>

      <div className="div2">
        <h2>WHAT WE OFFER ?</h2>
        <p id="para">Choosing us means saving time and money while loving the journey you’re on.</p>
      </div>

      <div className="div3">
        <div className="bullet">
          <li id="bullets">Explore exotic beaches with crystal-clear waters.</li>
          <li id="bullets">Embark on thrilling hiking adventures through lush forests.</li>
          <li id="bullets">Experience the rich culture and history of ancient cities.</li>
          <li id="bullets">Indulge in local cuisines and savor unique flavors.</li>
        </div> <br />


        <div className="line"></div>

        <div className="article">
          <p>Together Rome2Rio and Omio collaborate to create new and better experiences for travellers, from exploration of destinations to visit, right through to the booking experience and after a journey is started.
            Together Rome2Rio and Omio collaborate to create new and better experiences for travellers, from exploration of destinations to visit, right through to the booking experience and after a journey is started.
            Choosing us means saving time and money while loving the journey you’re on.</p>
        </div>
      </div>

      <div>
        <h1>ABOUT OUR COMPANY</h1>
        <p id="para">
          We have been recognised for our first-class technology by numerous global industry leaders.</p>
      </div>

      <div>
        <h3>TRAVEL AGENCY</h3>
        <p id="para">Tripadvisor makes travel planning easy. We are a door-to-door travel information and booking engine, helping you get to and from any location in the world safely.</p>

        {/* <div>
<div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(flightLoading)}>
          Flight: {flightLoading}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(hotelLoading)}>
          Hotel: {hotelLoading}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(carLoading)}>
          Car: {carLoading}%
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(cruisesLoading)}>
          Cruises: {cruisesLoading}%
        </div>
      </div>
</div> */}
      </div>


      <div>
        <h1>OUR TEAM</h1>
        <p id="para"> </p>

        <div className="OurTeam  div1">


          {data && data.map((i) => (
            <div className="uarebest">
              <img src={`http://192.34.63.158:4000/team/${i.logo}`} alt="" id="team" />
              <h4>{i.title}</h4>
              <p>{i.des}</p>
            </div>
          ))}



          {/* 
          <div className="uarebest">
            <img src="https://cms.rome2rio.com/wp-content/uploads/2023/01/yolli-2-250x250.jpg" alt="" id="team" />
            <h4>Yolli</h4>
            <p>Yolli has over 8 years of domestic and global travel industry experience, having worked for Flight Centre and Intrepid Travel.</p>
          </div>

          <div className="uarebest">
            <img src="https://cms.rome2rio.com/wp-content/uploads/2016/10/Tom-1.jpg" alt="" id="team" />
            <h4>Tom</h4>
            <p>Tom studied Software Engineering at the University of Melbourne, and has worked developing online booking and hospitality software.</p>
          </div>

          <div className="uarebest">
            <img src="https://cms.rome2rio.com/wp-content/uploads/2021/11/Rome2rio6158-250x250.jpg" alt="" id="team" />
            <h4>Sang</h4>
            <p>Sang is a front-end engineer with a strong passion for building tech products, focusing on delivering great user experiences.</p>
          </div> */}


        </div>
      </div>

    </div>
  );
}
export default About;