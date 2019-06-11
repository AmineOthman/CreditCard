import React from 'react';
import sim from './sim.PNG';
import mastercard from './mastercard.png'
import visa from './visa.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>CREDIT CARD</h1>
      </div>
      
      <div className="logo">
      <img src={sim} className="sim"/>
      </div>
      
      <div className="serial">
        <span>7253</span>
        <span>3256</span> 
        <span>7895</span> 
        <span>1245</span>
      </div>
      
      <div className="numb">
      <span>5422</span>
      </div>
      
      <div className="validthru">
        <span>VALID</span>
        <span>THRU</span>
      </div>

      <div className="dateform">
        <span>MOUNTH/YEAR</span>
      </div>

      <div className="date">
        <span>11/50</span>
      </div>

      <div className="logo1">
        <img src={mastercard} className="master"/>
        <img src={visa} className="visa"/>
      </div>

      <div className="cardholder">
        <h3>CARDHOLDER</h3>
      </div>





    </div>
  );
}

export default App;
