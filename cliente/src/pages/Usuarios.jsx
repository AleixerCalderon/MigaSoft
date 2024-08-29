import Content from "../componets/Content";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import "./styles.css";

const Usuarios = ()=>{
    return(
        <>
            <Header/>
            <div className="grid-container">
                <Sidebar/>
                <Content/>
            </div>
        </>
    );
}

export default Usuarios;