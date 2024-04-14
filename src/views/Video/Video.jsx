
import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import style from './Video.module.css';
import VideoComponent from "../../components/VideoComponent/VideoComponent";

const Video = () => {
    
    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    };

    return(
        <>
            <div className={style.container}>
                <div className={style.videoTitle}>
                    <h1>VEAMOS ESTE VIDEO</h1>
                </div>
                <div className={style.videoComponent}>
                    <VideoComponent></VideoComponent>
                </div>
                <div className={style.people}></div>
                <div className={style.doubleButtons}>
                    <div onClick={backPage} className={style.buttons}>
                        <IoIosArrowBack style={{marginRight: '10px'}} size={25}/>
                        ANTERIOR
                    </div>
                    <NavLink to={'/redes'} style={{textDecoration: 'none'}}>
                        <div style={{marginLeft:'10px'}} className={style.buttons}>SIGUIENTE 
                            <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Video;