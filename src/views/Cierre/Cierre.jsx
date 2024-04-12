
import React from "react";
import { NavLink } from 'react-router-dom';

const Cierre = () => {

    return(
        <>
            <h1>
                Cierra final
            </h1>
            <NavLink to={'/'}><button>Reiniciar</button></NavLink>
            <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" rel="noreferrer">   
                <button>Finalizar</button>
            </a>
        </>
    )
};

export default Cierre;