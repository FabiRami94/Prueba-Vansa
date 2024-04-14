
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import style from './Servicios.module.css';

const Servicios = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <h1>Servicios</h1>
                <button onClick={backPage}>Anterior</button>
                <NavLink to={'/cierre'}><button>Siguiente</button></NavLink>
            </div>
        </>
    )
};

export default Servicios;