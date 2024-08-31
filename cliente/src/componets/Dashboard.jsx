import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaUsers, FaBox, FaChartBar, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Importa el CSS

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-dark">Bienvenido</h1>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <Link to="/inventario" className="card text-decoration-none">
            <div className="card-body">
              <FaShoppingCart size={50} className="text-dark" />
              <h5 className="card-title text-dark">Inventario</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/usuarios" className="card text-decoration-none">
            <div className="card-body">
              <FaUsers size={50} className="text-dark" />
              <h5 className="card-title text-dark">Usuarios</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/bodega" className="card text-decoration-none">
            <div className="card-body">
              <FaBox size={50} className="text-dark" />
              <h5 className="card-title text-dark">Bodega</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/reportes" className="card text-decoration-none">
            <div className="card-body">
              <FaChartBar size={50} className="text-dark" />
              <h5 className="card-title text-dark">Reportes</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-decoration-none">
            <div className="card-body">
              <FaClipboardList size={50} className="text-dark" />
              <h5 className="card-title text-dark">Órdenes</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-decoration-none">
            <div className="card-body">
              <FaCog size={50} className="text-dark" />
              <h5 className="card-title text-dark">Configuraciones</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-decoration-none">
            <div className="card-body">
              <FaSignOutAlt size={50} className="text-dark" />
              <h5 className="card-title text-dark">Cerrar Sesión</h5>
            </div>
          </div>
        </div>
        {/* Tarjeta informativa para Total productos */}
        <div className="col-md-4 mb-4">
          <div className="card text-decoration-none">
            <div className="card-body">
              <h5 className="card-title text-dark">Total productos</h5>
              <p className="text-dark" style={{ fontSize: '24px' }}>640</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-group mt-4">
        <Link to="/inventario" className="btn btn-light text-dark m-2">Inventario</Link>
        <Link to="/usuarios" className="btn btn-secondary text-light m-2">Usuarios</Link>
        <Link to="/bodega" className="btn btn-dark text-light m-2">Bodega</Link>
        <Link to="/reportes" className="btn btn-info text-dark m-2">Reportes</Link>
      </div>
    </div>
  );
};

export default Dashboard;
