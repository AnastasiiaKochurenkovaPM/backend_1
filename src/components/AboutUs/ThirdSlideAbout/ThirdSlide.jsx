import React from "react";
import s from "./ThirdSlide.module.css";

const ThirdSlide = () => {
  return (
    <div className={s.main}>
      <div className={s.block1}>
        <div className={s.h1}>Шукаєш домашнього улюбленця?</div>
        <div className={s.line1}>
          <div className={s.point1}>
            <div className={s.div}></div>
            <div className={s.div}></div>
            <div className={s.div}></div>
            <div className={s.div}></div>
          </div>
        </div>
        <div className={s.text5}>
          <div className={s.step}>STEP 1</div>
          <p>
            <div className={s.text}>Перейди до вкладки "Тварини"</div>
          </p>
        </div>
        <div className={s.text6}>
          <div className={s.step}>STEP 2</div>
          <p>
            <div className={s.text}>
              Налаштуй фільтр відповідно до своїх побажань
            </div>
          </p>
        </div>
        <div className={s.text7}>
          <div className={s.step}>STEP 3</div>
          <p>
            <div className={s.text}>Обирай улюбленця</div>
          </p>
        </div>
        <div className={s.text8}>
          <div className={s.step}>STEP 4</div>
          <p>
            <div className={s.text}>
              Зв'яжися з волонтером або притулком та забирай тваринку до себе
            </div>
          </p>
        </div>
      </div>
      <div className={s.block2}>
        <div className={s.h1}>Потребуєш допомоги?</div>
        <div className={s.line2}>
          <div className={s.point1}>
            <div className={s.div}></div>
            <div className={s.div}></div>
            <div className={s.div}></div>
            <div className={s.div}></div>
          </div>
        </div>
        <div className={s.text1}>
          <div className={s.step}>STEP 1</div>
          <p>
            <div className={s.text}>
              Зареєструйся або ввійди в особистий кабінет
            </div>
          </p>
        </div>
        <div className={s.text2}>
          <div className={s.step}>STEP 2</div>
          <p>
            <div className={s.text}>
              Додай оголошення з інформацією про тварину
            </div>
          </p>
        </div>
        <div className={s.text3}>
          <div className={s.step}>STEP 3</div>
          <p>
            <div className={s.text}>
              На оголошення відгукнувся охочий взяти тварину
            </div>
          </p>
        </div>
        <div className={s.text4}>
          <div className={s.step}>STEP 4</div>
          <p>
            <div className={s.text}>Передай тварину новій люблячій сім'ї</div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ThirdSlide;
