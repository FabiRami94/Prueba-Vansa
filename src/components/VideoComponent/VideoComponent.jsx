
import React, { useState } from "react";
import style from './VideoComponent.module.css';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";

const VideoComponent = () => {

    const [openVideo, setOpenVideo] = useState(false);

    const openVideoHandler = () => {
        setOpenVideo(!openVideo);
    };

    return(
        <>  
            <div className={style.generalDiv}>
                <div className={style.note}>
                    <span>¡Haz click en el botón!</span>
                    </div>
                <div onClick={openVideoHandler} className={style.videoContainer}>
                    {/* <img src="https://i.ibb.co/cYj6Lw6/Foto-profesional.jpg" alt="Personal Photo"/> */}
                    <div className={style.ball}>
                        <IoMdArrowDropright  size={40} color="white"/> : 
                    </div>
                </div>
            </div>
                {/* <div className={ !openVideo ? `${style.closeDiv}` : `${style.openDiv}`}>
                   
                </div> */}
        </>
    )
};

export default VideoComponent;