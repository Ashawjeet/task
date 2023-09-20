import React ,{useState} from 'react'
import Styles from '../aandhra/andhra.module.css'

const PageRenderAd = () => {
    const [turn , setTurn] = useState(true)
  return (
    <div>
         { turn && (
    <div className={Styles.blurBackground}>

      <div className={Styles.blurForml} style={{top:'50%'}}>
        <form >
          <label style={{overflow:'hidden'}}> 
          <button style={{fontSize:'250%'  ,fontWeight:'bold', background:'transparent' ,border:'none'  ,float:'top' , display:'flex'}} onClick={ (e) => setTurn(false)}>x</button> 
          <img style={{objectFit:'contain' ,height:'25%' , width:'100%'}} src='https://cdn2.vectorstock.com/i/1000x1000/72/86/discount-50-percent-off-advertising-vector-9527286.jpg' />
          </label>  
          
     
          
        </form>

      </div>
    </div>
  )} 
    </div>
  )
}

export default PageRenderAd 