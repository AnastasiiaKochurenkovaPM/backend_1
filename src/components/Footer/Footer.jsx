import React from "react";
import s from './Footer.module.css'
import Information from "./Information/Information";
import Flag from "./Flag/Flag";

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <Information/>
            <Flag/>
        </footer>
    )
}

export default Footer