import React,{useState} from "react";
import './App.css';
import Select from 'react-select';
import {useHistory} from 'react-router-dom';
import Loader from './Loading';
import background from './img/weather.jpg'
import citydata from './City';

function App() {
  const [show,setshow]=useState(false);
  const [city,setcity]=useState('List of city');
  const[des,setdes]=useState('');
  const[temp,settemp]=useState('');
 const[fdata,setfdata]=useState([]);
 const history =useHistory();
 const [loader, setLoader] =useState(false);
 
  const showcity=async(e)=>{
    setcity(e.label);
    setLoader(true);
    const reso=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.label}&appid=3fbb2b31fd3e77c536be64abc677a4d1`);
    const data=await reso.json();
    setTimeout(() => {setLoader(false)},1000)
    if(reso.status==404){

    }
    else{
      if(data.name==undefined){
        setdes(" ");
        settemp(" ");
      }
      else{
      setdes(data.weather[0].description);
      settemp((data.main.feels_like)+'°F')
      }
    }
    const reso_forecast=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e.label}&appid=3fbb2b31fd3e77c536be64abc677a4d1`);
    const data_forecast=await reso_forecast.json();
    if(reso_forecast.status==404){

    }
    else{
      if(data_forecast.city==undefined){
        setfdata([]);
      
      }
      else{data_forecast.list.map((value)=>
         {
         })
         setfdata(data_forecast.list);
      }
    }
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:"100% 100%" }}>
    <button className="logout" onClick={()=>history.push("/login")}>Logout <i class="fas fa-sign-out-alt"></i></button>
    <div style={{display:'flex'}}>

    <div className="main_div" style={{position:'relative'}}>
      
          <div>
            <h1>Select City</h1>
              <Select  options={citydata} className="select" type="text" placeholder={city} value={city} onChange={showcity}  />
          </div>
          <div style={{display:'flex'}}>
            {  loader?<Loader/>:
            <React.Fragment>
             <div className="card">
               <h3 className="text">Current Weather Data</h3>
                <p>{city==='List of city'?" ":city}</p>
                <p>{des}</p>
                <p>{temp}</p>
              </div>
              <div className="card" id="forecast">
              <h3 >5-Day Forecast</h3>
                {
                 
                  fdata.map((value,index)=>
                  {
                    if(index%8==0)
                    { var dd=parseInt(index/8)+1;
                      return(<>  
                      <h3>Day {dd}</h3>                    
                        <p>{value.main.feels_like}°F</p>
                   </>)
                  
                    }
                    else{
                      return (
                        <>
                        <p>{value.main.feels_like}°F</p>
                        </>
                      )
                    }
                  })
                  
                }

              </div>
              </React.Fragment>
             }
           </div>
           <button className="aboutbtn" onClick={()=>setshow(!show)}>About Us</button>
      </div>
      {show==true?
       <div className="about">
         <h3>About Us Information</h3>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>

   </div>:null}
    </div>
    </div>
  );
}
export default App;
