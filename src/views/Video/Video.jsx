
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const Video = () => {
    
    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <h1>Soy el video</h1>
            <button onClick={backPage}>Anterior</button>
            <NavLink to={'/redes'}><button>Siguiente</button></NavLink>
        </>
    )
};

export default Video;