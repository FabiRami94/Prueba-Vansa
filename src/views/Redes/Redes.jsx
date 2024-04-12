
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const Redes = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <h1>
                Redes
            </h1>
            <button onClick={backPage}>Anterior</button>
            <NavLink to={'/servicios'}><button>Siguiente</button></NavLink>
        </>
    )
};

export default Redes;