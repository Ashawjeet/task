import React , {useState , useEffect} from 'react'
import Styles from "./goa.module.css"

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Homescara from "../public carasoul/homesCara/Home" ;

import p1 from "../picc/p1.jpg"
import p2 from "../picc/p2.jpg"
import p3 from "../picc/p3.jpg"
import p4 from "../picc/p4.jpg"
import p5 from "../picc/p5.jpg"
import p6 from "../picc/p6.jpg"
import p7 from "../picc/p7.jpg"
import p8 from "../picc/p8.jpg"
import p9 from "../picc/p9.jpg"
import axios from 'axios';
import ImageCarousel from '../locationCarousel/ImageCarousel';
const Goa = () => {
const[data , setData] = useState('')
const[data1 , setData1] = useState('')

useEffect(() => {
  fetchDatas()
  fetchDatas1()
}, [])

async function fetchDatas(req , res){
  try{

    const response = await axios.get('http://localhost:4000/stateDatas/getByState/Goa')
console.log("responseData:" ,response.data.data[0])

setData(response.data.data[0])
// console.log("data:" ,data?.exactLocation[0]?.locationDescription)
  }catch(err){
    return res.status(500).json({msg:'giving error'})
  }

  };
  async function fetchDatas1(req , res){
    try{
      const response = await axios.get('http://localhost:4000/locations/getByState/Goa')
  console.log("responseData1:" ,response.data.data)
  
  setData1(response.data.data)
  // console.log("data:" ,data?.exactLocation[0]?.locationDescription)
    }catch(err){
      return res.status(500).json({msg:'giving error'})
    }
  
    };
  console.log("11",data)
  return (
    <>

      <br />

      <div className={Styles.container}>
        <div className={Styles.main}>
          <div className={Styles.text}><h1  >Adventure Tourism in Goa</h1></div>

        </div>
      </div>
      
      <Homescara />

      <br />
      <br />
      <div className={Styles.tour}>
        <h2>Tourism in Goa</h2>
        <div className={Styles.about}>
          <div>
            <h3>About Goa</h3>
            <p>Known as the land of 'Blue Hills and Red River', the state is home to wild forests, mighty rivers, and acres and acres of tea plantations. Popularly known as the home to the one-horned rhino, the state is one of the top biodiversity hotspots in the entire world. With the majestic Brahmaputra river, magnificent hills, rich flora and fauna, the state is every tourist's paradise. One of the most beautiful states of India,</p>
            <p>{data?.firstPara}</p>
          </div>
          <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>Known as the land of 'Blue Hills and Red River', the state is home to wild forests, mighty rivers, and acres and acres of tea plantations. Popularly known as the home to the one-horned rhino, the state is one of the top biodiversity hotspots in the entire world. With the majestic Brahmaputra river, magnificent hills, rich flora and fauna, the state is every tourist's paradise. One of the most beautiful states of India,</p>
            <p>{data?.secondPara}</p>
          </div>
        </div>
        <br />
        <br /> 
        <br />

        <hr />
      </div>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {data1 && data1.map((x) => 


      <div className={Styles.ad} style={{marginBottom:'100px'}}>
        <div>
          {/* {x && <img  className={Styles.picz} height="100%" width="100%" src={`http://192.34.63.158:4000/locationImg/${data?.exactLocation[0]?.locationImg}`} />} */}
          <ImageCarousel locationData={x} />

        </div>
        
<Link to={`/commentAndhra/${data1.state}/${x.locationTitle}`}>
        <div style={{padding:'2px'}}> 
          <h2>Info About {x.locationTitle} GOA .</h2>

          <div className={Styles.textt}>
            <p>{x.locationDescription}</p>
          </div>
        </div>
</Link>
        
      </div>
    
)}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/Baga Beach Goa">

      <div className={Styles.ad}>
      <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/baga-beach-banner.webp' />
        </div>
        <div>
          <h3>Information About Baga Beach Goa</h3>
          <div className={Styles.textt}>
            <p>One of the most happening beaches in Goa, Baga Beach is where you will find water sports, fine dining restaurants, bars, and clubs. Situated in North Goa, Baga Beach is bordered by Calangute and Anjuna Beaches. Watersports are the major attraction of Baga Beach. Parasailing, wakeboarding, windsurfing, kite surfing, jet skiing are some of the top watersports activities to enjoy in Baga Beach. One can also go for dolphin spotting tours and island trips from the beach.</p>
          </div>
        </div>
        
      </div>
</Link>

      <br />
      <br />
      <br /> 
      <br /> 
      <br />

      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/Fort Aguada Goa">
      <div className={Styles.ad}>
        <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/fort-aguada-goa.webp' />
        </div>
        <div>
          <h3>Info About Fort Aguada Goa</h3>
          <div className={Styles.textt}>
            <p>Famed as the biggest water reservoir in Asia, Aguada Fort is the crowning glory of Portuguese legacy in Goa. This fort is more than 400 years old.

              Fort Aguada never ceases to attract tourists with its mesmerizing beauty and rich history. You can witness the beautiful confluence of Mandovi River and Arabian Sea and an old lighthouse along with the magnificent fort.</p>
          </div>
        </div>
      </div>
</Link>
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/Chapora Fort Goa">
      <div className={Styles.ad}>
      <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/chapora-fort-goa.webp' />
        </div>
        <div>
          <h3>  Info About Chapora Fort Goa</h3>
          <div className={Styles.textt}>
            <p>This fort was shown in the filming of Bollywood movie Dil chahta Hai and became very popular among youngsters as Dil Chahta hai Fort after the movie gained a lot of recognition.

              Native laterite stone and hilly terrains joined hands to take you back in time, when this fort used to be the pride of Portuguese rulers. Who knows about the great stories that were once created here? Who knows how many battles were once fought here? One can only imagine. Little remains of barracks, secret tunnels, officer quarters and cylindrical towers give fuel to the imagination.</p>
          </div>
        </div>
        
      </div>
</Link>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/ Scuba Diving in Goa ">
      <div className={Styles.ad}>
        <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/scuba-diving-goa.webp' />
        </div>
        <div>
          <h3>Scuba Diving in Goa</h3>
          <div className={Styles.textt}>
            <p>Unarguably, one of the top activities in Goa, scuba diving allows travellers to explore the rich underwater world. Enjoy witnessing 100 species of fishes and other aquatic animals at the gorgeous Grande Island which has amazing diving sites like Coral Garden, Shelter Cove, Suzy’s Wreck, Lobster’s Avenue, and Bounty Bay. It is an 8-hour experience which include a boat ride to Grande Island, dolphin sighting, and pool training session before the actual dive. </p>
          </div>
        </div>
      </div>
</Link>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/Water Adventure in Goa">
      <div className={Styles.ad}>
      <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/water-adventure-goa.webp' />
        </div>
        <div>
          <b>Water Adventure in Goa</b>
          <div className={Styles.textt}>
            <p>It is universally acknowledged that the traveler in search of good beaches must also be in want of thrilling water adventures. What else would be a better place than Goa? Goa is one of the most popular beach destinations of India and tourists from all over the world come here to enjoy a plethora of Watersports apart from enjoying the picturesque views of beaches.</p>
          </div>
        </div>
        
      </div>

</Link>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/commentAndhra/Arunanchal Pradesh/Hot Air Ballooning in Goa ">
      <div className={Styles.ad}>
        <div>
          <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/hot-air-goa.webp' />
        </div>
        <div>
          <h3>Hot Air Ballooning in Goa</h3>

          <div className={Styles.textt}>
            <p>A one-of-its-kind experience to have in Goa, hot air ballooning can be enjoyed in Assolda Football Grounds in Chandor. Soar in the sky at an altitude of 2000 feet for an hour and get the bird-eye of the picturesque beaches and the hills of Goa. Hot air ballooning in Goa is a fun-filled experience which is perfect for families, friends, and honeymoon couples.</p>
          </div>
        </div>
      </div>
      </Link>
      <br />
      <br />
      <br />
    </>
  )
}

export default Goa

// return (
//   <>

//     <br />

//     <div className={Styles.container}>
//       <div className={Styles.main}>
//         <div className={Styles.text}><h1  >Adventure Tourism in Goa</h1></div>

//       </div>
//     </div>
//     <div className={Styles.slidem} style={{ position: 'relative', zIndex: -1, height: "fit-content" }}>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}

//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={p1} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p2} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p3} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p4} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p5} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p6} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p7} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p8} className='carouselImg' /></SwiperSlide>
//         <SwiperSlide><img src={p9} className='carouselImg' /></SwiperSlide>

//       </Swiper>
//     </div>
    
//     <br />
//     <br />
//     <div className={Styles.tour}>
//       <h2>Tourism in Goa</h2>
//       <div className={Styles.about}>
//         <div>
//           <h3>About Goa</h3>
//           <p>Golden, Groovy, Gumptious – Goa.  A cocktail of tropical influences. An oasis of white-gold sands, azure waters, and kaleidoscopic skies. A playground for historians, hippies, and spiritualists alike. A backpacker’s haven, and a wealthy man’s fancy. An assemblage of little Portuguese bungalows, and a string of luxury hotels - Goa is a heady blend of the old and the new. If not for every reason mentioned above, make a trip solely for its succulent cuisine.</p>
//         </div>
//         <div>
//           <h3>Plenty of adventure to be had!</h3>
//           <p>Goa is a coastal state, hence graced with 40-degree summers and sky-high humidity levels. Although its monsoons paint the state with magical showers, it is not a conducive time to visit the beaches. As such, the best time to visit Goa would be in the winters. November to March makes for the perfect trip, as Goa is blessed with cool breezes.
//             Situated in the western coast of India, within the Konkan region, is the state of Goa. Goa shares its border with Maharashtra in the north, and Karnataka in the east and south. The latter is separated from the state, by the Western Ghats. The Arabian sea hugs its west coast.
//           </p>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />

//       <hr />
//     </div>



//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//       <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/agonda-beach-banner.webp' />
//       </div>
//       <div>
//         <h2>Information About Agonda Beach Goa</h2>

//         <div className={Styles.textt}>
//           <p>A quiet and beautiful beach in South Goa, Agonda Beach is for those who want to spend time amidst peaceful surroundings and away from the chaos. This pristine beach in Goa stretches almost two miles and is fringed by beach shacks offering some great food and drinks.
//             Swimming : One of the top activities on Agonda Beach is swimming. The beach is perfect for a refreshing swim and lazing around after it.
//           </p>Boat Trip : One can hire a boat from Agonda Beach to visit the nearby Butterfly and Honeymoon Beaches.
//         </div>
//       </div>
//     </div>

//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//     <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/baga-beach-banner.webp' />
//       </div>
//       <div>
//         <h3>Information About Baga Beach Goa</h3>
//         <div className={Styles.textt}>
//           <p>One of the most happening beaches in Goa, Baga Beach is where you will find water sports, fine dining restaurants, bars, and clubs. Situated in North Goa, Baga Beach is bordered by Calangute and Anjuna Beaches. Watersports are the major attraction of Baga Beach. Parasailing, wakeboarding, windsurfing, kite surfing, jet skiing are some of the top watersports activities to enjoy in Baga Beach. One can also go for dolphin spotting tours and island trips from the beach.</p>
//         </div>
//       </div>
      
//     </div>


//     <br />
//     <br />
//     <br /> 
//     <br /> 
//     <br />
//     <br />
//     <div className={Styles.ad}>
//       <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/fort-aguada-goa.webp' />
//       </div>
//       <div>
//         <h3>Info About Fort Aguada Goa</h3>
//         <div className={Styles.textt}>
//           <p>Famed as the biggest water reservoir in Asia, Aguada Fort is the crowning glory of Portuguese legacy in Goa. This fort is more than 400 years old.

//             Fort Aguada never ceases to attract tourists with its mesmerizing beauty and rich history. You can witness the beautiful confluence of Mandovi River and Arabian Sea and an old lighthouse along with the magnificent fort.</p>
//         </div>
//       </div>
//     </div>

//     <br />
//     <br />
//     <br />

//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//     <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/chapora-fort-goa.webp' />
//       </div>
//       <div>
//         <h3>  Info About Chapora Fort Goa</h3>
//         <div className={Styles.textt}>
//           <p>This fort was shown in the filming of Bollywood movie Dil chahta Hai and became very popular among youngsters as Dil Chahta hai Fort after the movie gained a lot of recognition.

//             Native laterite stone and hilly terrains joined hands to take you back in time, when this fort used to be the pride of Portuguese rulers. Who knows about the great stories that were once created here? Who knows how many battles were once fought here? One can only imagine. Little remains of barracks, secret tunnels, officer quarters and cylindrical towers give fuel to the imagination.</p>
//         </div>
//       </div>
      
//     </div>

//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//       <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/scuba-diving-goa.webp' />
//       </div>
//       <div>
//         <h3>Scuba Diving in Goa</h3>
//         <div className={Styles.textt}>
//           <p>Unarguably, one of the top activities in Goa, scuba diving allows travellers to explore the rich underwater world. Enjoy witnessing 100 species of fishes and other aquatic animals at the gorgeous Grande Island which has amazing diving sites like Coral Garden, Shelter Cove, Suzy’s Wreck, Lobster’s Avenue, and Bounty Bay. It is an 8-hour experience which include a boat ride to Grande Island, dolphin sighting, and pool training session before the actual dive. </p>
//         </div>
//       </div>
//     </div>

//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//     <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/water-adventure-goa.webp' />
//       </div>
//       <div>
//         <b>Water Adventure in Goa</b>
//         <div className={Styles.textt}>
//           <p>It is universally acknowledged that the traveler in search of good beaches must also be in want of thrilling water adventures. What else would be a better place than Goa? Goa is one of the most popular beach destinations of India and tourists from all over the world come here to enjoy a plethora of Watersports apart from enjoying the picturesque views of beaches.</p>
//         </div>
//       </div>
      
//     </div>

//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className={Styles.ad}>
//       <div>
//         <img height="100%" width="100%" src='https://www.tourmyindia.com/states/goa/image/hot-air-goa.webp' />
//       </div>
//       <div>
//         <h3>Hot Air Ballooning in Goa</h3>

//         <div className={Styles.textt}>
//           <p>A one-of-its-kind experience to have in Goa, hot air ballooning can be enjoyed in Assolda Football Grounds in Chandor. Soar in the sky at an altitude of 2000 feet for an hour and get the bird-eye of the picturesque beaches and the hills of Goa. Hot air ballooning in Goa is a fun-filled experience which is perfect for families, friends, and honeymoon couples.</p>
//         </div>
//       </div>
//     </div>
//     <br />
//     <br />
//     <br />
//   </>
// )