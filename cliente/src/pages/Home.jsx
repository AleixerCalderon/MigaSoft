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


    return (
            <>
                <Header />  
                    <div className="bg-image">
                    <div className="container">
                        <h1>Bienvenido a Pan Diario<br/>
                        Una Franquicia Bimbo</h1>
                        <h3>Best place to work 2024</h3>
                    <p>
                        Servicio al cliente y cultura empresarial inigualables,
                        ambiente de trabajo excepcional para personas talentosas.<br/>
                        Aquí puedes encontrar información relevante sobre nuestros servicios y productos.
                        Nos esforzamos por ofrecer la mejor calidad y atención a nuestros clientes.
                    </p>
                    </div>
                    </div>
                <Dashboard/>
                <Footer />
            </>
    );
}

export default HomePage;
