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
                    <li><span className="link">Hola, Admin</span></li>
                    <li><span className="link">Cerrar sesión</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;