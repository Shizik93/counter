import React from "react";
import style from './CounterSettings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {SetInitialValue, SetMaxValue} from "../reducer/reducer";
import {AppRootType} from "../state/store";

export const CounterSettings = () => {
    const state = useSelector((state: AppRootType) => state.state)
    const dispatch = useDispatch()
    const maxValue = state.maxValue
    const initValue = state.initialValue
    const startInput = maxValue <= initValue || maxValue < 0 ? style.error : ''
    const maxInput = maxValue <= initValue || initValue < 0 ? style.error : ''


    const ChangeMaxValue = (e: React.FormEvent<HTMLInputElement>) => {

        dispatch(SetMaxValue(+e.currentTarget.value))
    }
    const ChangeInitValue = (e: React.FormEvent<HTMLInputElement>) => {

        dispatch(SetInitialValue(+e.currentTarget.value))
    }

    return (
        <div className={style.counterSettings}>



            <div className={style.inputStyle}>
                <div>Max Value</div>
                <div><input className={startInput} onChange={ChangeMaxValue} value={maxValue} type={'number'}/></div>
            </div>
            <div className={style.inputStyle}>
                <div>Start Value</div>
                <input className={maxInput} onChange={ChangeInitValue} value={initValue} type={'number'}/>
            </div>



        </div>
    )

}