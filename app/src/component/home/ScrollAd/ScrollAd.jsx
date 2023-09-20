import React, { useEffect, useState } from 'react';
import './ScrollAd.css';

import Ad1 from '../../footer/pic/6a2cf129.jpeg'
import ads1 from '../../footer/imgAds/add1.jpeg'
import ads2 from '../../footer/imgAds/add2.jpeg'
import ads3 from '../../footer/imgAds/add3.jpeg'
import ads4 from '../../footer/imgAds/add4.jpeg'
import axios from 'axios';

const ScrollAd = ( name) => {
  useEffect(() => {
    loadAdds();
  }, [])
  const [images, setImages] = useState();
  console.log(name.name, "adds12");
  
  const loadAdds = async () => {

    const { data } = await axios.post(`http://192.34.63.158:4000/adds/getAll`,
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

  return (
    <>
      <div className="marquee-container">
        {
          images && images.map((i) => {
            if(i.name == 'home'){
            return <div className="marquee">
              {/* <span>{i.image_url} </span> &nbsp; */}

              <a href={i.url} target='_blank'>
                {/* <img style={{height:'180px'}} src={`http://192.34.63.158:4000/add/${i.image_url}`} alt="" className='adss22' /> */}
              <img style={{height:'180px',width:'200px' ,marginRight:'10px'}} src='https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" className='adss22' />
              <img style={{height:'180px',width:'200px',marginRight:'10px'}} src='https://images.pexels.com/photos/7957753/pexels-photo-7957753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" className='adss22' />
              <img style={{height:'180px',width:'200px',marginRight:'10px'}} src='https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" className='adss22' />
              <img style={{height:'180px',width:'200px',marginRight:'10px'}} src='https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt="" className='adss22' />

<img style={{height:'180px',width:'200px',marginRight:'10px'}} src='https://images.pexels.com/photos/5947542/pexels-photo-5947542.jpeg?auto=compress&cs=tinysrgb&w=800' alt="" className='adss22'/>
              <img style={{height:'180px',width:'100%' ,marginRight:'10px'}} src={ads1} alt="" className='adss22' />
              <img style={{height:'180px',width:'100%',marginRight:'10px'}} src={ads2}  alt="" className='adss22' />
              <img style={{height:'180px',width:'100%',marginRight:'10px'}} src={ads3}  alt="" className='adss22' />
              <img style={{height:'180px',width:'100%',marginRight:'10px'}} src={ads4} alt="" className='adss22' /></a>
           
            </div>
            }else{
              return null;
            }
          })
        }

      </div>


    </>
  )
}

export default ScrollAd



