import { useEffect, useState } from "react";
import Header from "../componets/Header";
import burgerImg1 from "../assets/burger.png";
import burgerImg2 from "../assets/burger1.png";
import burgerImg3 from "../assets/burger2.png";
import Footer from "../componets/Footer";

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
        <Header />
        {usuario ? <pre>{JSON.stringify(usuario, null, 1)}</pre> : <p>Cargando...</p>}
        <h2>Bienvenido a Pan Diario </h2>
        <h1>Una Franquisia Bimbo</h1>
        
        <div className="main-container justify-content-center">
            <p>
            Servicio al cliente y cultura empresarial inigualables,
            ambiente de trabajo excepcional para personas talentosas
            </p>
          <div className="content">
            <p>
              Aquí puedes encontrar información relevante sobre nuestros servicios y productos. 
              Nos esforzamos por ofrecer la mejor calidad y atención a nuestros clientes.
            </p>
          </div>
          <div className="image-container">
            <div className="img">
            <img className="panburger" src={burgerImg1} alt="pan hamburguer" />
            </div>
            <div className="img">
            <img className="panburger" src={burgerImg2} alt="pan hamburguer" />
            </div>
            <div className="img">
            <img className="panburger" src={burgerImg3} alt="pan hamburguer" />
            </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}

export default HomePage;