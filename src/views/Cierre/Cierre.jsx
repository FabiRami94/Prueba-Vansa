
import React from "react";
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import style from './Cierre.module.css';

const Cierre = () => {

    return(
        <>
            <div className={style.container}>
                <div className={style.peopleImage}>
                    <img src="https://i.ibb.co/cFxRPqx/Peoplep6.png" alt="People Page6"/>
                </div>
                <div className={style.end}>
                    <h1>¡Hemos</h1>
                    <h1>culminado!</h1>
                </div>
                <div className={style.farewell}>
                    <p> Ahora que terminaste, cuéntanos por mail</p>
                    <p> ¿Cómo</p>
                    <p> te sentiste en la prueba? </p>
                    <p>Hablamos pronto.</p>
                </div>
                <div className={style.doubleButtons}>
                    <NavLink to={'/'} style={{textDecoration: 'none'}}>
                        <div className={style.buttons}>
                            <IoIosArrowBack style={{marginRight: '10px'}} size={25}/>
                            REINICIAR
                        </div>
                    </NavLink>
                    <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" rel="noreferrer">   
                        <div style={{marginLeft:'10px'}} className={style.buttons}>FINALIZAR 
                            <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
};

export default Cierre;