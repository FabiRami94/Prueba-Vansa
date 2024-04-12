
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const Servicios = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <h1>Servicios</h1>
            <button onClick={backPage}>Anterior</button>
            <NavLink to={'/cierre'}><button>Siguiente</button></NavLink>
        </>
    )
};

export default Servicios;