import {Link} from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-migasoft.png";

const Header = ()=>{
    return(
        <header className="header">
            <div className="logo">
                <Link className="link" to="/"><img src={logo} alt="MigaSoft" /></Link> 
            </div>
            <nav>
                <ul className="link-list">
                    <li><Link className="link" to="/">Inicio</Link></li>
                    <li><Link className="link" to="/inventario">Inventario</Link></li>
                    <li><Link className="link" to="/usuarios">Usuarios</Link></li>
                    <li><Link className="link" to="/bodega">Bodega</Link></li>
                    <li><Link className="link" to="/reportes">Reportes</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;