import React from "react";
import s from './Information.module.css'

const Information = (props) => {
    return (
        <div className={s.information}>
            <div className={s.social}>
                <div className={s.social_title}>Vicodesky</div>
                <div className={s.icons}>
                    <a className='_icon-Facebook' href="#"></a>
                    <a className='_icon-Twitter' href="#"></a>
                    <a className='_icon-YouTube' href="#"></a>
                    <a className='_icon-Telegram' href="#"></a>
                    <a className='_icon-Instagram' href="#"></a>
                    <a className='_icon-Linked-In' href="#"></a>
                </div>
            </div>
            <div className={`${s.sign} ${s.joint}`}>
                <div>SIGN UP TO OUR NEWSLETTER</div>
                <div className={s.input}>
                    <input type="text" placeholder='  Email address' maxLength='30'/>
                    <div className={s.long}></div>

                </div>
            </div>
            <div className={`${s.contact} ${s.joint}`}>
                <div>CONTACT US</div>
                <div className='_icon-Phone'>+380-***-**-**</div>
                <div className='_icon-Mail'>*********@gmail.com</div>
            </div>
            <div className={`${s.map} ${s.joint}`}>
                <div className={s.map_title}>SITE MAP</div>
                <div className={s.map_list}>
                    <div>Тварини</div>
                    <div>Притулки</div>
                    <div>Про нас</div>
                    <div>Вхід в особистий кабінет</div>
                </div>
            </div>

        </div>
    )
}

export default Information