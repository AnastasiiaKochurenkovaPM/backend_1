import React from "react";
import s from './Flag.module.css'

const Flag = (props) => {
    return (
        <div className={s.flag}>
            <div className={s.blue}>
                <div className={s.b_text}>#StandWithUkraine</div>
            </div>
            <div className={s.yellow}>
                <div className={s.y_text}>
                    <div>© All rights reserved. Made with <span><svg width="16" height="16"
                                                                     viewBox="0 0 16 16" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M7.9995 13.2718C4.93345 11.5256 3.22342 9.78988 2.39651 8.28393C1.55017 6.7426 1.62401 5.44442 2.09365 4.52306C3.05896 2.62924 5.80403 2.02365 7.47654 4.13897L7.99946 4.80034L8.52242 4.13901C10.1952 2.0236 12.9404 2.62928 13.9057 4.52306C14.3754 5.44441 14.4492 6.74258 13.6028 8.28392C12.7758 9.78987 11.0657 11.5255 7.9995 13.2718ZM7.99952 2.73758C5.64671 0.501843 2.17579 1.42587 0.905732 3.91755C0.208704 5.28503 0.199183 7.05244 1.22778 8.92568C2.24724 10.7823 4.27985 12.742 7.677 14.6197L7.99949 14.7979L8.32198 14.6197C11.7193 12.742 13.752 10.7823 14.7715 8.9257C15.8002 7.05247 15.7907 5.28504 15.0936 3.91755C13.8236 1.42582 10.3525 0.501876 7.99952 2.73758Z"
      fill="#FD7D00"/>
</svg>
</span> by Vicodesky</div>
                    <div>Help Ukrainian armed forces</div>
                    <div>GO TO TOP</div>
                </div>


            </div>
        </div>
    )
}

export default Flag