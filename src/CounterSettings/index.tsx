import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SetInitialValue, SetMaxValue } from '../reducer/reducer';
import { AppRootType } from '../state/store';

import style from './counterSettings.module.css';

const CounterSettings = () => {
  const dispatch = useDispatch();
  const maxValue = useSelector((state: AppRootType) => state.counter.maxValue);
  const initialValue = useSelector((state: AppRootType) => state.counter.initialValue);
  const startInput = maxValue <= initialValue || maxValue < 0 ? style.error : '';
  const maxInput = maxValue <= initialValue || initialValue < 0 ? style.error : '';

  const ChangeMaxValue = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(SetMaxValue(+e.currentTarget.value));
  };
  const ChangeInitValue = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(SetInitialValue(+e.currentTarget.value));
  };

  return (
    <div className={style.counterSettings}>
      <div className={style.inputStyle}>
        <div>Max Value</div>
        <div>
          <input
            className={startInput}
            onChange={ChangeMaxValue}
            value={maxValue}
            type="number"
          />
        </div>
      </div>
      <div className={style.inputStyle}>
        <div>Start Value</div>
        <input
          className={maxInput}
          onChange={ChangeInitValue}
          value={initialValue}
          type="number"
        />
      </div>
    </div>
  );
};

export default CounterSettings;
