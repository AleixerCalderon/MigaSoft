import { useEffect, useState } from "react";
import Header from "../componets/Header";
import Dashboard from "../componets/Dashboard";

const HomePage = ()=>{
    const [usuario, setUsuario]=useState(null);
    const userId = 2;
    useEffect(()=>{
        const fetchData = async ()=>{
            const userToken = localStorage.getItem('token');
            try {
                const response = await fetch(`http://localhost:3001/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Error en el consumo del api');
                }
                const data = await response.json();
                setUsuario(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    },[]);
    return(
        <>
            <Header/>
            <h1>Este es el HomePage</h1>
            {usuario ? <pre>{JSON.stringify(usuario, null, 1)}</pre>: <p>Cargando...</p>}
            <Dashboard/>
        </>
    );
}

export default HomePage;