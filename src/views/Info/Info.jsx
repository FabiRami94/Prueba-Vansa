
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const Info = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <h1>Soy en info</h1>
            <button onClick={backPage}>Anterior</button>
            <NavLink to={'/video'}><button>Siguiente</button></NavLink>
        </>
    )
};

export default Info;