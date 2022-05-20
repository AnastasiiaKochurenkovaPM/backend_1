import React from "react";
import s from './Main.module.css'
import FirstSlide from "./FirstSlide/FirstSlide";
import SecondSlide from "./SecondSlide/SecondSlide";
import ThirdSlide from "./ThirdSlide/ThirdSlide";

const Main = (props) => {
    return (
        <main className={s.main}>

            <FirstSlide/>
            <SecondSlide/>
            <ThirdSlide/>
        </main>
    )
}

export default Main
