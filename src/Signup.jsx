import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addData} from './actions/index';
import {useHistory} from 'react-router-dom';
import signup from './img/signup.jpg'
import './App.css';

const Signup = () => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.add.list);
    const history =useHistory();
    
    return (
        <div className="mainsignup" style={{ backgroundImage: `url(${signup})` }}>
        <div className="signup" >
            <h2>Signup</h2>
            <div>
            <label for="fname">Email</label>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
            <label for="fname">Password</label>
           <input type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <br></br>
            <br></br>
            <button  className="sign" onClick={()=>
                {dispatch(addData(email,pass));
                if(email===""|| pass==="")
                {
                    alert("Please fill Email and pass");
                }
                else
                {
                alert("Signup successfully! Please login")}}}>signup</button>
            
            <br></br>
            <br></br>
            
            <b>Already member</b>
            <button className="login" onClick={()=>history.push("/login")}>login</button>
            
           

        </div>
        </div>
        </div>
    )
}

export default Signup
