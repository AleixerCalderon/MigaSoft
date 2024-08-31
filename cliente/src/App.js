import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Usuarios from './pages/Usuarios';
import Inventario from './pages/Inventario';
import Bodega from './pages/Bodega';
import Reportes from './pages/Reportes';
import Login from './componets/ingreso/Login';
import Dashboard from './componets/Dashboard.jsx';



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
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/inventario" element={<Inventario/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/bodega" element={<Bodega/>}/>
        <Route path="/reportes" element={<Reportes/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
