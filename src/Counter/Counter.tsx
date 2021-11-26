import React from "react";
import style from'./counter.module.css'

export const Counter = (props:any) => {
    const styleCounter=props.value===props.maxValue?`${style.err} ${style.counter}`:style.counter
    return(
        <div className={styleCounter}>

            <div className={style.counterValue}>{props.value}</div>
        </div>
    )

}