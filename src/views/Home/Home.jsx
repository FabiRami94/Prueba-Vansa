
import React from "react";
import { NavLink } from "react-router-dom";
import style from './Home.module.css';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return(
        <>
            <h1>Soy el home</h1>
            <NavLink to={'/info'}>
                <button className={style.buttons}> INICIAR 
                    {/* <div style={{display: 'inline-block', height: '20px'}}>
                        <IoIosArrowForward style={{paddingTop:'20%'}} size={20}/>
                    </div> */}
                </button>
            </NavLink>
        </>
    )
};

export default Home;