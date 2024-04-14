
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import style from './Servicios.module.css';
import ServiciosComponent from "../../components/ServiciosComponent/ServiciosComponent";

const Servicios = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <div className={style.serviciosTitle}>
                    <h1>LO QUE HACEMOS</h1>
                </div>
                <div className={style.serviciosComponent}>
                    <ServiciosComponent></ServiciosComponent>
                </div>
                <div className={style.doubleButtons}>
                    <div onClick={backPage} className={style.buttons}>
                        <IoIosArrowBack style={{marginRight: '10px'}} size={25}/>
                        ANTERIOR
                    </div>
                    <NavLink to={'/cierre'} style={{textDecoration: 'none'}}>
                        <div style={{marginLeft:'10px'}} className={style.buttons}>SIGUIENTE 
                            <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Servicios;