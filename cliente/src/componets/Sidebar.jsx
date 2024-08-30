import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/inventario">
              Inventario
            </Link>
          </li>
          <li>
            <Link className="link" to="/usuarios">
              Usuarios
            </Link>
          </li>
          <li>
            <Link className="link" to="/bodega">
              Bodega
            </Link>
          </li>
          <li>
            <Link className="link" to="/reportes">
              Reportes
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
