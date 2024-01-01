// App.js

import React,{useEffect,useState} from 'react';
import Navigators from './config/Navigation/Navigtion';
import './Screen/login.css'
import HomePage from './Screen/HomePage';
import Login from './Screen/Login';



const App = () => {
  let [islogin,setIslogon]=useState(false);
  useEffect(()=>{
    // localStorage.setItem('islogin',false)

    setIslogon(localStorage.getItem('islogin'))
    // alert(islogin)
  },[islogin])
  return (
    <div className="app-container">
     {/* <Navigators/> */}

     {

islogin!==null  || islogin? 

<HomePage/>

:
<Login/>
     }
    </div>
  );
};

export default App;
