import React, { useState, useEffect } from 'react';
import '../styles/card.css';
import oraculos from '../data/oraculos.json';

const Card = (props) => {
  const [flip, setFlip] = useState('');
  useEffect(() => {
    setFlip ('');
  },[props.reset]);
  return (
    <div className="flip-card" onClick = {() => {setFlip('flip')}} style = {{margin: '5px'}}>
    <div className= {`flip-card-inner ${flip}`}>
    <div className="flip-card-front">
      <img src= {'https://images.unsplash.com/photo-1579584118471-993938c027bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'} alt="Oraculo"/>
    </div>
    <div className="flip-card-back">
    <img src={oraculos.test[props.result]} alt="Oraculo"/>
    </div>
  </div>
</div>
  );
}

export default Card;