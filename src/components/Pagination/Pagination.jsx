
import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {services} from '../../assets/services.jsx';

export default function Pagination () {

    const [proyectCounter, setProyectCounter] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const moveToLeftProyect = () => {
        if (proyectCounter > 1) {
            setProyectCounter(prevCounter => prevCounter - 1);
        }
    };

    const moveToRightProyect = () => {
        if (proyectCounter < services.length) {
            setProyectCounter(prevCounter => prevCounter + 1);
        }
    };

    return (
        <>
            {
               windowWidth > '768' ?              
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                    <div className={style.principalContainer}>
                        {services.map((service, index) => (
                            <div key={index} style={{ display: index + 1 === proyectCounter ? "block" : "none", justifyContent: 'center', alignItems: 'center' }}>
                                <div className={style.secondaryContainer}>
                                    <div className={style.textContent}>
                                        <h3>{service.titulo}</h3>
                                        <p>{service.contenido}</p>
                                    </div>
                                    <div className={style.iconContent}>
                                        {service.icono}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: '20px', alignItems: 'center' }}>
                        <div
                            onClick={moveToLeftProyect}
                            className={`${style.ball} ${proyectCounter === 1 ? style.disabled : ''}`}>
                            <IoIosArrowBack size={30} color="white"></IoIosArrowBack>
                        </div>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={style.pageDotContainer}>
                                <div
                                    className={`${style.pageDot} ${item === proyectCounter ? style.activeDot : ''}`}>
                                </div>
                            </div>
                        ))}
                        <div
                            onClick={moveToRightProyect}
                            className={`${style.ball} ${proyectCounter === services.length ? style.disabled : ''}`}>
                            <IoIosArrowForward size={30} color="white"></IoIosArrowForward>
                        </div>
                    </div>
                </div> :
                
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                    <div className={style.principalContainer}>
                        {services.map((service, index) => (
                            <div key={index} style={{ display: index + 1 === proyectCounter ? "block" : "none", justifyContent: 'center', alignItems: 'center' }}>
                                <div className={style.secondaryContainer}>
                                    <div className={style.textContent}>
                                        <h3>{service.titulo}</h3>
                                        <p>{service.contenido}</p>
                                    </div>
                                    <div className={style.iconContent}>
                                        {service.icono}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: '5px', alignItems: 'center' }}>
                        <div
                            onClick={moveToLeftProyect}
                            className={`${style.ball} ${proyectCounter === 1 ? style.disabled : ''}`}>
                            <TiArrowSortedUp size={30} color="white"></TiArrowSortedUp>
                        </div>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={style.pageDotContainer}>
                                <div
                                    className={`${style.pageDot} ${item === proyectCounter ? style.activeDot : ''}`}>
                                </div>
                            </div>
                        ))}
                        <div
                            onClick={moveToRightProyect}
                            className={`${style.ball} ${proyectCounter === services.length ? style.disabled : ''}`}>
                            <TiArrowSortedDown size={30} color="white"></TiArrowSortedDown>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}