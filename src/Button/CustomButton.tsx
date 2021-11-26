import React from "react";
import style from './CustomButton.module.css'

type CustomButtonPropsType={
    setMode?:boolean
    disable?:boolean,
    maxValue?:number,
    callback:()=>void
    children:React.ReactNode

}
 export const CustomButton = (props:CustomButtonPropsType) => {
     return(

          <button className={props.setMode?style.setModeCustomButton:style.customButton} disabled={props.disable} onClick={props.callback}>
              {props.children}
          </button>

  )
}