
import React from "react";
import { NavLink } from "react-router-dom";
import style from './Home.module.css';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {  
    // https://i.ibb.co/PQ34VY1/Fondo-Vansa.png
    return(
        <>
            <div className={style.container}>
                <div className={style.manImage}></div>
                <div className={style.welcome}>
                    <h1>Te damos la</h1>
                    <h1>bienvenida a Vansa:</h1>
                </div>
                <div className={style.womanImage}></div>
                <div className={style.buttonContainer}>
                    <NavLink to={'/info'}>
                        <button className={style.buttons}> INICIAR 
                            {/* <div style={{display: 'inline-block', height: '20px'}}>
                                <IoIosArrowForward style={{paddingTop:'20%'}} size={20}/>
                            </div> */}
                        </button>
                    </NavLink>
                </div>
                <div className={style.test}>
                    <h1>Prueba técnica de:</h1>
                </div>
                <div className={style.name}>
                    <div className={style.containerName}>
                        <h1>FABIÁN RAMÍREZ</h1>
                    </div>
                </div>
                <div className={style.vacant}></div>
            </div>
        </>
    )
};

export default Home;