
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import style from './Redes.module.css';
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Redes = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
           <div className={style.container}>
                <div className={style.mediaTitle}>
                    <h1>CONOCE MÁS DE VANSA</h1>
                </div>
                <div className={style.mediaComponent}>
                    <SocialMedia></SocialMedia>
                </div>
                <div className={style.people}></div>
                <div className={style.doubleButtons}>
                    <div onClick={backPage} className={style.buttons}>
                        <IoIosArrowBack style={{marginRight: '10px'}} size={25}/>
                        ANTERIOR
                    </div>
                    <NavLink to={'/servicios'} style={{textDecoration: 'none'}}>
                        <div style={{marginLeft:'10px'}} className={style.buttons}>SIGUIENTE 
                            <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Redes;