import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Usuarios from './pages/Usuarios';
import Inventario from './pages/Inventario';
import InventariosXBodega from './pages/InventarioXBodega'
import Bodega from './pages/Bodega';
import Reportes from './pages/Reportes';
import Login from './componets/ingreso/Login';
import Dashboard from './componets/Dashboard.jsx';
import Traslados from './pages/Traslados.jsx';
import Productos from './pages/Productos.jsx';
import Lotes from './pages/Lotes.jsx';



function App() {
  const [data, setData] = useState([]);
  const [personas, setPersonas] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/inventario" element={<InventariosXBodega/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/bodega" element={<Bodega/>}/>
        <Route path="/lotes" element={<Lotes/>}/>
        <Route path="/reportes" element={<Reportes/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/traslados" element={<Traslados/>} />
      </Routes>
    </div>
  );
}

export default App;
