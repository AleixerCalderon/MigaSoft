import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';


function App() {
  const [data, setData] = useState([]);
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/darBodegas')
      .then(response => {
        setPersonas(response.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/darBodegas')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
    </div>
  );
}

export default App;
