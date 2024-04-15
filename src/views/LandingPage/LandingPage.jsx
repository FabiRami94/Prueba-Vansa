
import React from "react";
import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css';
import { IoIosArrowForward } from "react-icons/io";

const LandingPage = () => {
    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <NavLink to={'/home'} style={{textDecoration: 'none'}}>
                    <div className={style.buttons}> COMENZAR 
                        <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                    </div>
                </NavLink>
            </div>
        </>
    )
};

export default LandingPage;