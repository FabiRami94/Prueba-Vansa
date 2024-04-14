
import React from "react";
import style from './ServiciosComponent.module.css';
import Pagination from "../Pagination/Pagination";

const ServiciosComponent = () => {

    return(
        <>
            <div className={style.generalDiv}>
                <div className={style.note}>
                    <span>¡Haz click en las flechas!</span>
                </div>
                <Pagination></Pagination>   
            </div>  
        </>
    )
};

export default ServiciosComponent;