import "./sidebar.css";
import { Link } from "react-router-dom";
import icon1 from "../assets/icon-inventario.svg";
import icon2 from "../assets/icon-roles.svg";
import icon3 from "../assets/icon-bodega.svg";
import icon4 from "../assets/icon-analitca.svg";
import icon5 from "../assets/icon-volver.svg";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
          
            <Link className="link" to="/home">
            <img src={icon5} alt="Inventario"/>Ir al inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/inventario">
            <img src={icon1} alt="Inventario"/>Inventario
            </Link>
          </li>
          <li>
            <Link className="link" to="/usuarios">
            <img src={icon2} alt="Inventario"/>Usuarios
            </Link>
          </li>
          <li>
            <Link className="link" to="/bodega">
            <img src={icon3} alt="Inventario"/>Bodega
            </Link>
          </li>
          <li>
            <Link className="link" to="/reportes">
            <img src={icon4} alt="Inventario"/>Reportes
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
