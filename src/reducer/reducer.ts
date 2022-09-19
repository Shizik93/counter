type initialStateType = {
  initialValue: number;
  value: number;
  maxValue: number;
  setMode: boolean;
};
const initialState: initialStateType = {
  initialValue: 0,
  value: 0,
  maxValue: 5,
  setMode: false,
};

type ReducerType =
  | ReturnType<typeof IncValue>
  | ReturnType<typeof SetInitialValue>
  | ReturnType<typeof SetMode>
  | ReturnType<typeof SetMaxValue>;

// eslint-disable-next-line default-param-last
export const reducer = (state = initialState, action: ReducerType): initialStateType => {
  switch (action.type) {
    case 'INC-VALUE': {
      return { ...state, value: action.value };
    }
    case 'SET-INIT-VALUE': {
      return { ...state, initialValue: action.value };
    }
    case 'SET-MODE': {
      return { ...state, setMode: !state.setMode };
    }
    case 'SET-MAX-VALUE': {
      return { ...state, maxValue: action.maxValue };
    }

    default:
      return state;
  }
};

export const IncValue = (value: number) => {
  return {
    type: 'INC-VALUE',
    value,
  } as const;
};

export const SetInitialValue = (value: number) => {
  return {
    type: 'SET-INIT-VALUE',
    value,
  } as const;
};

export const SetMode = () => {
  return {
    type: 'SET-MODE',
  } as const;
};

export const SetMaxValue = (maxValue: number) => {
  return {
    type: 'SET-MAX-VALUE',
    maxValue,
  } as const;
};
