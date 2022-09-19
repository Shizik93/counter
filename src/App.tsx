import React, { useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton } from './Button/CustomButton';
import { Counter } from './Counter/Counter';
import { CounterSettings } from './CounterSettings/CounterSettings';
import { IncValue, SetInitialValue, SetMaxValue, SetMode } from './reducer/reducer';
import { AppRootType } from './state/store';

const App = () => {
  const dispatch = useDispatch();
  const setMode = useSelector<AppRootType, boolean>(state => state.counter.setMode);

  const value = useSelector<AppRootType, number>(state => state.counter.value);
  const maxValue = useSelector<AppRootType, number>(state => state.counter.maxValue);
  const initialValue = useSelector<AppRootType, number>(
    state => state.counter.initialValue,
  );
  const disableInc = value === maxValue;
  const disableReset = value === initialValue;
  const disableSet = maxValue <= initialValue || maxValue < 0 || initialValue < 0;

  useEffect(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    const savedInitValue = localStorage.getItem('initValue');

    if (savedMaxValue && savedInitValue) {
      dispatch(IncValue(JSON.parse(savedInitValue)));
      dispatch(SetInitialValue(JSON.parse(savedInitValue)));
      dispatch(SetMaxValue(JSON.parse(savedMaxValue)));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('initValue', JSON.stringify(initialValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [initialValue, maxValue]);
  const INC = () => {
    dispatch(IncValue(value + 1));
  };
  const InitValue = () => {
    dispatch(SetInitialValue(initialValue));
    dispatch(IncValue(initialValue));
  };
  const ChangeSetMode = () => {
    dispatch(SetMode());
    if (setMode) {
      dispatch(IncValue(initialValue));
    }
  };

  return (
    <div className="App">
      {setMode ? <CounterSettings /> : <Counter maxValue={maxValue} value={value} />}
      <div className="container">
        {!setMode && (
          <CustomButton disable={disableInc} callback={INC}>
            +
          </CustomButton>
        )}
        <CustomButton disable={disableSet} setMode={setMode} callback={ChangeSetMode}>
          SET
        </CustomButton>
        {!setMode && (
          <CustomButton disable={disableReset} callback={InitValue}>
            RESET
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default App;
