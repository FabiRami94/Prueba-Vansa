
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Soy el home</h1>
            <NavLink to={'/info'}><button>Iniciar</button></NavLink>
        </>
    )
};

export default Home;