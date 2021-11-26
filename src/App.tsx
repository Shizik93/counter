import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CustomButton} from "./Button/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";
import {IncValue, SetInitialValue, SetMaxValue, SetMode} from './reducer/reducer';
import {CounterSettings} from "./CounterSettings/CounterSettings";


function App() {
    const state = useSelector((state: AppRootType) => state.state)
    const dispatch = useDispatch()
    let value = state.value
    const maxValue = state.maxValue
    const initialValue = state.initialValue
    const disableInc = state.value === maxValue
    const disableReset = state.value === initialValue
    const disableSet=maxValue<=initialValue||maxValue<0||initialValue<0
    const setMode = state.setMode
    useEffect(()=>{
        const savedMaxValue=localStorage.getItem('maxValue')
        const savedInitValue=localStorage.getItem('initValue')
        if(savedMaxValue&&savedInitValue){
            dispatch(IncValue(JSON.parse(savedInitValue)))
            dispatch(SetInitialValue(JSON.parse(savedInitValue)))
            dispatch(SetMaxValue(JSON.parse(savedMaxValue)))
        }


    },[dispatch])
    useEffect(()=>{
        localStorage.setItem('initValue',JSON.stringify(initialValue))
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
    },[initialValue,maxValue])
    const INC = () => {
        dispatch(IncValue(value + 1))
    }
    const InitValue = () => {
        dispatch(SetInitialValue(state.initialValue))
        dispatch(IncValue(state.initialValue))

    }
    const ChangeSetMode = () => {
        dispatch(SetMode())
        state.setMode && dispatch(IncValue(state.initialValue))


    }


    return (
        <div className="App">
            {state.setMode ?
                <CounterSettings/> :
                <Counter maxValue={maxValue} value={value}/>}
            <div className={'container'}>
                {!setMode &&
                <CustomButton disable={disableInc} maxValue={maxValue} callback={INC}>+</CustomButton>}
                <CustomButton disable={disableSet} setMode={setMode} callback={ChangeSetMode}>SET</CustomButton>
                {!setMode &&
                <CustomButton disable={disableReset} callback={InitValue}>RESET</CustomButton>}
            </div>

        </div>
    );
}

export default App;
