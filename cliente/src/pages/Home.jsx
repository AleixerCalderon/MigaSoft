import React from "react";
import { useEffect, useState } from "react";
import 'react-bootstrap';
import Header from "../componets/Header";
import Dashboard from "../componets/Dashboard";
import Footer from "../componets/Footer";
import "./Home.css";

const HomePage = () => {
    const [usuario, setUsuario] = useState(null);
    const userId = 2;

    useEffect(() => {
        const fetchData = async () => {
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
    }, []);

    return (
            <>
                <Header />
                {usuario ? <pre>{JSON.stringify(usuario, null, 1)}</pre> : <p>Cargando...</p>}

                <div className="container">
                    <h2>Bienvenido a Pan Diario</h2>
                    <h1>Una Franquicia Bimbo</h1>
                </div>
                <p>
                    Servicio al cliente y cultura empresarial inigualables,
                    ambiente de trabajo excepcional para personas talentosas.
                </p>
                <p>
                    Aquí puedes encontrar información relevante sobre nuestros servicios y productos.
                    Nos esforzamos por ofrecer la mejor calidad y atención a nuestros clientes.
                </p>
                <Dashboard/>
                <Footer />
            </>
    );
}

export default HomePage;
