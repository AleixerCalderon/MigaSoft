import "./sidebar.css";

const Sidebar = ()=>{
    return(
        <>
            <aside className="sidebar">
                <ul>
                    <li><a href="#home">Inventario</a></li>
                    <li><a href="#home">Roles</a></li>
                    <li><a href="#home">Bodega</a></li>
                    <li><a href="#home">Reportes</a></li>
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;