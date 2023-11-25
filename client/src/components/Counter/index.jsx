import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCount, setStep, subCount } from "../../store/counterSlice";

const Counter = (props) => {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount({ step }));
  const handleSub = () => dispatch(subCount({ step }));
  const handleStep = ({ target: { value } }) =>
    dispatch(setStep({ step: Number(value) }));
  return (
    <section>
      <h2>Count: {count}</h2>
      <input type="range" value={step} onChange={handleStep} />
      <span>{step}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </section>
  );
};

export default Counter;
