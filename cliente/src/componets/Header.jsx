import {Link} from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-migasoft.png";

const Header = ()=>{
    return(
        <header className="header">
            <div className="logo">
            <img src={logo} alt="MigaSoft" /> 
            </div>
            <nav>
                <ul className="link-list">
                    <li><Link className="link" to="/">Inicio</Link></li>
                    <li><Link className="link" to="/usuarios">Usuarios</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;