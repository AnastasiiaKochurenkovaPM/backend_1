import React from "react";
import s from './SecondSlide.module.css'
import muhtar from '../../../img/Muhtar.jpg'
import runa from '../../../img/runa.jpg'
import snizhok from '../../../img/snizhok.jpg'
import murzyk from '../../../img/murzyk.jpg'


const SecondSlide = (props) => {
    return (
        <div className={s.secondSlide}>
            <div className={s.secondSlide_title}>
                <div className={s.text1}>Вони все ще чекають на люблячого господаря</div>
                <div className={s.text2}>
                    <div>Більше оголошень</div>
                    <i className={s.arrow}></i>
                </div>
            </div>
            <div className={s.animals}>
                <div className={s.animals_arrow}>left</div>
                <div className={s.img}>
                    <img src={murzyk} alt="Мухтар"/>
                    <div className={s.whiteBlock}></div>
                </div>
                <div className={s.img}>
                    <img src={muhtar} alt="Мухтар"/>
                    <div className={s.whiteBlock}></div>
                </div>
                <div className={s.img}>
                    <img src={snizhok} alt="Мухтар"/>
                    <div className={s.whiteBlock}></div>
                </div>
                <div className={s.img}>
                    <img src={runa} alt="Мухтар"/>
                    <div className={s.whiteBlock}></div>
                </div>
                <div className={s.arr}>right</div>
            </div>
        </div>
    )
}

export default SecondSlide