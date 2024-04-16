
import React from "react";
import style from './LandingPage.module.css';

const LandingPage = () => {
    return(
        <>
            <div className={style.container}>
                <div className={style.manImage}>
                    <img src="https://i.ibb.co/hRrPNDn/Manp1.png" alt="Man Page1"/>
                </div>
                <div className={style.welcome}>
                    <h1>Te damos la</h1>
                    <h1>bienvenida a Vansa:</h1>
                </div>
                <div className={style.womanImage}>
                    <img src="https://i.ibb.co/DkpY8D8/Womanp1.png" alt="Woman Page1"/>
                </div>
            </div>      
        </>
    )
};

export default LandingPage;