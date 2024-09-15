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
                {/* <div className="bg-image">
                <div className="container">
                    <h1>Bienvenido a Pan Diario</h1>
                    <h1>Una Franquicia Bimbo</h1>
                    <h4>Best place to work 2024</h4>
                </div>
                <p>
                    Servicio al cliente y cultura empresarial inigualables,
                    ambiente de trabajo excepcional para personas talentosas.
                </p>
                <p>
                    Aquí puedes encontrar información relevante sobre nuestros servicios y productos.
                    Nos esforzamos por ofrecer la mejor calidad y atención a nuestros clientes.
                </p>
                </div> */}
                <Dashboard/>
                <Footer />
            </>
    );
}

export default HomePage;
