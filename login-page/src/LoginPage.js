// src/LoginPage.js

import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
        
      <div className="login-container">
      <div className='loginHeader' style={{display:'flex', flex: 1}}>
            <div className='heading1' style={{display:'flex', flex:'0.5',color:'orange', fontSize:'10px',
        padding:'8px'}}>
                ALREADY MEMBERS
            </div>
            <div className='heading2' style={{display:'flex', flex:'0.5',color:'black', justifyContent:'flex-end',
        fontSize:'10px', padding:'8px'}}>
                Need help ?
            </div>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="sign-in-btn">SIGN IN</button>
        </form>
      </div>
      <div className='accountContainer'>
        <div className='container1'>
        Don't have an account yet ?
        </div>
        <div className='container2' style={{color:'black'}}>
          Create an account
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
