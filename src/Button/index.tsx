import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import style from './customButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type CustomButtonPropsType = {
  setMode?: boolean;
  disable?: boolean;
  callback: () => void;
  children: React.ReactNode;
} & DefaultButtonPropsType;
const CustomButton = ({
  setMode,
  disable,
  children,
  callback,
  ...restProps
}: CustomButtonPropsType) => {
  return (
    <button
      type="button"
      {...restProps}
      className={setMode ? style.setModeCustomButton : style.customButton}
      disabled={disable}
      onClick={callback}
    >
      {children}
    </button>
  );
};

export default CustomButton;
