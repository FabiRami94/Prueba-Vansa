
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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