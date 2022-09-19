import React from 'react';

import style from './counter.module.css';

type CounterPropsType = {
  maxValue: number;
  value: number;
};
const Counter = ({ maxValue, value }: CounterPropsType) => {
  const styleCounter =
    value === maxValue ? `${style.err} ${style.counter}` : style.counter;

  return (
    <div className={styleCounter}>
      <div className={style.counterValue}>{value}</div>
    </div>
  );
};

export default Counter;
