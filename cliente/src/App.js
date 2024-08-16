import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import Personas from './componets/personas';

function App() {
const [data, setData] = useState([]);
const [personas, setPersonas] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:3001/api/darPersonas')
  .then(response =>{
    setPersonas(response.data);
  })
  .catch(err=>{
    console.log('Error: ', err);
  });
},[]);

useEffect(()=>{
  axios.get('http://localhost:3001/api/data')
  .then(response =>{
    setData(response.data);
  })
  .catch(err=>{
    console.log('Error: ', err);
  });
},[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
      <h1>
        D ata C R U D
      </h1>
      <Personas personas={personas}/>
      {data.map(item => (
        <li key={item.id}>{item.NombreEstablecimiento}</li>
      ))}    

    </div>
  );
}

export default App;
