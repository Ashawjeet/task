import React , {useState, useEffect}from 'react'
import Styles from "./ad.module.css"

import axios from 'axios'
import Ad1 from "./shivila.png"
import ScrollAd from '../../../../home/ScrollAd/ScrollAd'
const Ad = () => {
  const [imagaa ,setImagaa] = useState([]);
  const [data, setData] = useState();
  const [imges , setImges] = useState([]);
  const loadAdds = async () => {

    const { data } = await axios.post(`http://192.34.63.158:4000/adds/getAll`,
    )
    console.log(data.status, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setImagaa(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  useEffect(() => {
   loadAdds();
  // Ad();
     
  }, [])
  console.log('imagaa31' ,imagaa)
  return (
    <div>
      <div className={Styles.marquee}>
      <div className={Styles.marquee}>
        <p>For  </p> 
        <p>Posting </p>
        <p>Ad </p>
        <p>just </p>
        <p>Contact</p>
        <p> with</p>
        &nbsp;
       
        {
  imagaa &&
  imagaa.map((i) => {
    if (i.name == 'andhra') {
      return (
       <img height={80} width={300} src={`http://192.34.63.158:4000/add/${i.image_url}`}/>
      );
    }
    return null; // Return null for other cases
  })
}
        </div>
    </div>
    </div>
  )
}

export default Ad
