
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import style from './Redes.module.css';

const Redes = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <h1>
                    Redes
                </h1>
                <button onClick={backPage}>Anterior</button>
                <NavLink to={'/servicios'}><button>Siguiente</button></NavLink>
            </div>
        </>
    )
};

export default Redes;