
import React, { useState } from "react";
import style from './Photo.module.css';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Photo = () => {

    const [openPhoto, setOpenPhoto] = useState(false);

    const openPhotoHandler = () => {
        setOpenPhoto(!openPhoto);
    };
 
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className={style.generalDiv}>
                    <div className={style.note}>
                        <span>¡Haz click aquí!</span>
                    </div>
                    <div onClick={openPhotoHandler} className={style.photo}>
                        <img src="https://i.ibb.co/cYj6Lw6/Foto-profesional.jpg" alt="Personal Photo"/>
                        <div className={style.ball}>
                            { 
                                openPhoto ? 
                                <TiArrowSortedDown size={40} color="white"/> : 
                                <TiArrowSortedUp size={40} color="white"/>
                            }
                        </div>
                    </div>
                </div>
                <div className={ !openPhoto ? `${style.closeDiv}` : `${style.openDiv}`}>
                    <div className={style.about}>
                        <span>La programación es un reto y una fuente constante de motivación, estoy listo para transformar ideas en realidad con creatividad y determinación. Cada desafío es una oportunidad para construir y crecer, porque "Si solo haces lo que ya sabes hacer, no vas a llegar a ser más de lo que eres hoy" Kungfu P.</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Photo;