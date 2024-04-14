
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import style from './Video.module.css';

const Video = () => {
    
    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <h1>Soy el video</h1>
                <button onClick={backPage}>Anterior</button>
                <NavLink to={'/redes'}><button>Siguiente</button></NavLink>
            </div>
        </>
    )
};

export default Video;