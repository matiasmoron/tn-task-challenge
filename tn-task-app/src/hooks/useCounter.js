import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + state.step,
      };

    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - state.step,
      };
    default:
      break;
  }

  return state;
};

export default function useCounter({
  initialCount = 0,
  minimumValue = 0,
  step = 1,
}) {
  const [{ count }, dispatch] = useReducer(reducer, {
    count: initialCount,
    step,
  });

  const isMinimumValue = count === minimumValue;

  return {
    count,
    increment: () => dispatch({ type: ACTIONS.INCREMENT }),
    decrement: () => !isMinimumValue && dispatch({ type: ACTIONS.DECREMENT }),
  };
}
