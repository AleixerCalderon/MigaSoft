import {Link} from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-migasoft.png";

const Header = ()=>{
    return(
        <header className="header">
            <div className="brand">
                <Link className="link" to="/"><img src={logo} alt="MigaSoft" /></Link> 
            </div>
            <nav>
                <ul className="link-list">
                    <li><Link className="link" to="/profile">Hola, Admin</Link></li>
                    <li><Link className="link" to="/">Cerrar sesión</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;