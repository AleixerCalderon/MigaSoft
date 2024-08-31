import {Link} from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-migasoft.png";
import icon1 from "../assets/icon-user.svg";
import icon2 from "../assets/icon-logout.svg";

const Header = ()=>{
    return(
        <header className="header">
            <div className="brand">
                <Link className="link" to="/"><img src={logo} alt="MigaSoft" /></Link> 
            </div>
            <nav>
                <ul className="link-list">
                    <li><Link className="link" to="/profile"><img src={icon1} alt="User"/> Hola, Admin</Link></li>
                    <li><Link className="link" to="/"><img src={icon2} alt="User"/> Cerrar sesión</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;