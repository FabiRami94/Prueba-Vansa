
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import style from './Info.module.css';

import Photo from "../../components/Photo/Photo";

const Info = () => {

    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <div className={style.manImage}></div>
                <div className={style.photo}>
                    <Photo></Photo>
                </div>
                <div className={style.doubleButtons}>
                    <div onClick={backPage} className={style.buttons}>
                        <IoIosArrowBack style={{marginRight: '10px'}} size={25}/>
                        ANTERIOR
                    </div>
                    <NavLink to={'/video'} style={{textDecoration: 'none'}}>
                        <div style={{marginLeft:'10px'}} className={style.buttons}>SIGUIENTE 
                            <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Info;