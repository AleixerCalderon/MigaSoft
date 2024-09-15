import "./sidebar.css";
import { Link } from "react-router-dom";
import icon1 from "../assets/icon-inventario.svg";
import icon2 from "../assets/icon-roles.svg";
import icon3 from "../assets/icon-bodega-v2.svg";
import icon4 from "../assets/icon-analitca.svg";
import icon5 from "../assets/icon-volver.svg";
import icon6 from "../assets/icon-traslados.svg";
import icon7 from "../assets/icon-productos.svg";
import icon8 from "../assets/icon-lotes.svg";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
          
            <Link className="link" to="/home">
            <img src={icon5} alt="Inicio"/>Ir al inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/inventario">
            <img src={icon1} alt="Inventario"/>Inventario
            </Link>
          </li>
          
          <li>
            <Link className="link" to="/bodega">
            <img src={icon3} alt="Bodega"/>Bodega
            </Link>
          </li>
          <li>
            <Link className="link" to="/lotes">
            <img src={icon8} alt="Lotes"/>Lotes
            </Link>
          </li>
          <li>
            <Link className="link" to="/productos">
            <img src={icon7} alt="Productos"/>Productos
            </Link>
          </li>
          <li>
            <Link className="link" to="/traslados">
            <img src={icon6} alt="Traslados"/>Traslados
            </Link>
          </li>
          <li>
            <Link className="link" to="/usuarios">
            <img src={icon2} alt="Usuarios"/>Usuarios
            </Link>
          </li>
          <li>
            <Link className="link" to="/reportes">
            <img src={icon4} alt="Reportes"/>Reportes
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
