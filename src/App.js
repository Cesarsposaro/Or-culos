import React from 'react';
import {useState, useEffect} from 'react';
import './styles/App.css';
import Card from './components/card';
import oraculos from './data/oraculos.json';


const App = () => {
  const [reset, setReset] = useState(false);
  const [cards, setCards] = useState([]);
  useEffect(() => { setTimeout ( () =>{
  let aux = [0,0,0];
  aux[0] = Math.floor(Math.random() * oraculos.test.length);
  for (let a = 1 ; a < aux.length ; a++ ){
  let i = Math.floor(Math.random() * oraculos.test.length);
  aux[a] = i;
  if (aux[a-1] === aux[a]){
  i = Math.floor(Math.random() * oraculos.test.length);
  aux[a] = i;
  }
  else if (aux[a-2] === aux[a]){
    i = Math.floor(Math.random() * oraculos.test.length);
    aux[a] = i;
  }}
  setCards(aux);} , 1000);
  return () => {
    setReset(false);
  }
  },[reset]); 
  return (
    <div>
      <h1 style = {{textAlign: 'center'}}>Oráculos</h1>
      <br/>
    <div className = "container">
      <Card result = {cards[0]} reset = {reset}/>
      <Card result = {cards[1]} reset = {reset}/>
      <Card result = {cards[2]} reset = {reset}/>
    </div>
    <br></br>
    <div className = "container">
    <button className = "redeal" onClick = {() =>{setReset(true)}}>Comenzar de nuevo</button>
    </div>
    </div>
  );
}

export default App;
