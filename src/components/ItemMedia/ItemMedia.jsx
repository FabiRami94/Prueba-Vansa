
import React, { useState } from "react";
import style from './ItemMedia.module.css'

const ItemMedia = ({icon, link, arrow, direction, name}) => {

    const [openItem, setOpenItem] = useState(false);

    const openItemHandler = () => {
        setOpenItem(!openItem);
    }

    return(
        <>
            <div className={style.generalDiv} style={{flexDirection: `${direction}`}}>
                <div className={style.itemContainer}>
                    {icon}  
                    <div onClick={openItemHandler} className={style.ball}>
                        {arrow}
                    </div>
                </div>
                <div className={ !openItem ? `${style.closeDiv}` : `${style.openDiv}`}>
                    <div className={style.links}>
                            <p>{name}</p>
                        <a href={link} style={{textDecoration: 'none'}}>
                            <span>{link}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ItemMedia;