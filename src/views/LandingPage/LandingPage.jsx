
import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
    return(
        <>
            <NavLink to={'/home'} style={{textDecoration: 'none'}}>
                <div className={style.buttons}> COMENZAR 
                    <IoIosArrowForward style={{marginLeft: '10px'}} size={25}/>
                </div>
            </NavLink>
        </>
    )
};

export default LandingPage;