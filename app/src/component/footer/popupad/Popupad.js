import React,{useState} from 'react'
import './Popupad.css'

import ads1 from '../imgAds/ads1.jpeg';
const Popupad = () => {
    const [turn , setTurn] = useState(true)
  const [transformUp, setTransformUp] = useState(true)

   const  handlepopup = (()=>{
    setTransformUp(!transformUp);
    setTimeout(() => {
      setTransformUp(true);


    }, 5000);


  })  


  return (
    <div>
          { turn && ( 
    <div className="popads" style={{float:'center', display:'flex', alignItems:'center',justifyContent:'center' }}>

      <div className="blurForml" style={{float:'center' , alignContent:'center',justifyContent:'center',transform: transformUp ? 'translateY(-10%)' : 'translateY(200%)' ,transform: transformUp ? 'translateY(-38%)' : 'translateY(38%)' }}>
        <form style={{maxHeight:'400px',backgroundColor:'#ff92', }}>
          <label style={{ paddingTop:'2px', width:'90%'}}> 
          <button type="button" style={{fontSize:'15px',borderRadius:'20%' , marginLeft:'5px', marginTop:'5px', padding :'5px',fontWeight:'bold', background:'white' ,border:'none'  ,float:'top' , display:'flex'}} onClick={() => handlepopup()} >x</button> 
          <img style={{ background: 'black',borderRadius: '10px', width:'90%', height:'100px'}} src={ads1} />
          </label>  
          
       
           
        </form>
 
      </div>
    </div>
  )} 
    </div>
  )
}

export default Popupad