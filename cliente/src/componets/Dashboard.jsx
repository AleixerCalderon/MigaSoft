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

const Dashboard = () => {
  const cards = [
    { to: "/inventario", icon: icon1, title: "Inventario" },
    { to: "/usuarios", icon: icon2, title: "Usuarios" },
    { to: "/bodega", icon: icon3, title: "Bodega" },
    { to: "/reportes", icon: icon4, title: "Reportes" },
    { to: "/ordenes", icon: icon5, title: "Órdenes" },
    { to: "/configuraciones", icon: icon6, title: "Configuraciones" },
    { to: "/total-productos", icon: icon7, title: "Total productos", extra: <p className="text-light" style={{ fontSize: '24px' }}>640</p> }
  ];

  return (
    <>
      <div className="container mt-5 p-3">
        <div className="row text-center">
          <div className="container">
            <div className="row justify-content-around">
              {cards.slice(0, 4).map((card, index) => (
                <div key={index} className="col-md-2 mb-4">
                  <Link to={card.to} className="card text-decoration-none" style={{ height: '200px', width: '200px' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img src={card.icon} alt={card.title} />
                      <h5 className="card-title text-light">{card.title}</h5>
                      {card.extra}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="row justify-content-around">
              {cards.slice(4, 7).map((card, index) => (
                <div key={index} className="col-md-3 mb-1">
                  <Link to={card.to} className="card text-decoration-none" style={{ height: '200px', width: '200px' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img src={card.icon} alt={card.title} />
                      <h5 className="card-title text-light">{card.title}</h5>
                      {card.extra}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Dashboard;
