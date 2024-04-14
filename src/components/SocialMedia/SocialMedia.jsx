
import React from "react";
import style from './SocialMedia.module.css';
import ItemMedia from "../ItemMedia/ItemMedia.jsx";
import { itemsMedia } from "../../assets/itemsMedia.jsx";

const SocialMedia = () => {

    return(
        <>
            <div className={style.generalDiv}>
                <div className={style.note}>
                    <span>¡Haz click en cada ítem!</span>
                </div>
                { itemsMedia.map((item) => (
                    <ItemMedia 
                        icon = {item.icon} 
                        link = {item.link}
                        direction = {item.direction}
                        arrow = {item.arrow}
                        name = {item.name}
                    ></ItemMedia>
                ))}
            </div>
        
        </>
    )
};

export default SocialMedia;