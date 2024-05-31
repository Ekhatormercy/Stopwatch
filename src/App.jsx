import whitetimer1 from "./assets/whitetimer1.png"
// import { MdMotionPhotosPaused } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa6";
import { MdOutlineLockReset } from "react-icons/md";
import { MdPause } from "react-icons/md";
import './App.css'
import React from "react"

function App() {
  const [time, setTime] = React.useState(0)
  const [timeOn, setTimeOn] = React. useState(false)

  React.useEffect(()=>{
    let interval = null;
    if (timeOn){
      interval = setInterval(() =>{
        setTime(prevTime => prevTime + 10) 
      } ,10)
    }
    else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeOn])

      
    return (
 <>
  <div className='mainbox'>
    <div className='stopwatch'>
      <div className="timericon">
        <div className='timerimage'>
          <img src={whitetimer1} alt="" />
        </div>
       
      </div>
      <div className="Midtext">
        <h2>STOPWATCH</h2>
        <div className="empty"></div>
          
          </div>
          <div className="Num">
            <div className="smallbig">
          <h1 className='small'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
      <h1 className='small'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
      <h1 className='small'>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</h1>
      </div>
            <div className="Hms">
               <h1>H</h1>
               <h1>M</h1>
               <h1>S</h1>
            </div>
            </div>
         
          
          <div className="icondiv">
        
            {/* <FaPlus style={{fontSize: "30px", color: "white"}}/> */}
            <MdPause onClick={()=> setTimeOn(false)} style={{fontSize: "35px", color: "white"}}/>
            <FaGooglePlay onClick={() => setTimeOn(true)} style={{fontSize: "35px", color: "white"}} />
            {/* <button onClick={()=>setTimeOn(true)} className="startbtn">start</button> */}
            <MdOutlineLockReset onClick={() => setTime(0)} style={{fontSize: "35px", color: "white"}} />


          </div>
    </div>
  
  </div>
 </>
 )
   
}

export default App
