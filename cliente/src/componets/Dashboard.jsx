import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './dashboard.css';
import icon1 from "../assets/icon-inventario.svg";
import icon2 from "../assets/icon-roles.svg";
import icon3 from "../assets/icon-bodega.svg";
import icon4 from "../assets/icon-analitca.svg";
import icon5 from "../assets/icon-ordenes.svg";
import icon6 from "../assets/icon-user.svg";
import icon7 from "../assets/icon-totalProductos.svg";
import icon8 from "../assets/icon-cerrarSesion.svg";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-dark mt-5 margin-60">Bienvenido</h1>
      <div className="row text-center">
        {[
          { to: "/inventario", icon: icon1, title: "Inventario" },
          { to: "/usuarios", icon: icon2, title: "Usuarios" },
          { to: "/bodega", icon: icon3, title: "Bodega" },
          { to: "/reportes", icon: icon4, title: "Reportes" },
          { to: "/ordenes", icon: icon5, title: "Órdenes" },
          { to: "/configuraciones", icon: icon6, title: "Configuraciones" },
          { to: "/cerrar-sesion", icon: icon8, title: "Cerrar Sesión" },
          { to: "/total-productos", icon: icon7, title: "Total productos", extra: <p className="text-ligh" style={{ fontSize: '24px' }}>640</p> }
        ].map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Link to={card.to} className="card text-decoration-none">
              <div className="card-body">
                <img src={card.icon} alt={card.title} />
                <h5 className="card-title text-light">{card.title}</h5>
                {card.extra}
              </div>
            </Link>
          </div>
        ))}
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
