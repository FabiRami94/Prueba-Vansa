
import React, { useState } from "react";
import style from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {services} from '../../assets/services.jsx';

export default function Pagination () {

    const [proyectCounter, setProyectCounter] = useState(1);

    const onClickHandlerProyect = (event) => {
        const { id } = event.target;
        if (id === "Left1") {
            moveToLeftProyect();
        } else {
            moveToRightProyect();
        }
    };

    const moveToLeftProyect = () => {
        if (proyectCounter <= 1) {
            setProyectCounter(3);
        } else {
            setProyectCounter(prevCounter => prevCounter - 1);
        }
    };

    const moveToRightProyect = () => {
        if (proyectCounter >= 3) {
            setProyectCounter(1);
        } else {
            setProyectCounter(prevCounter => prevCounter + 1);
        }
    };


    return (
        <>
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
                <div style={{ display: "flex", flexDirection: "row", marginTop: '20px' }}>
                    <div
                        id="Left1"
                        onClick={onClickHandlerProyect}
                        className={style.ball}>
                            <IoIosArrowBack size={30} color="white"></IoIosArrowBack>
                    </div>
                    <div>RAYAS EN EL MEDIO</div>
                    <div
                        id="Rigth1"
                        onClick={onClickHandlerProyect}
                        className={style.ball}>
                            <IoIosArrowForward size={30} color="white"></IoIosArrowForward>
                    </div>
                </div>
            </div>
        </>
    )
}