import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, setCounter } from "../slices/counterSlice";


export  function Counter() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [input, setInput] = useState();

    const onIncHandler = () => {
        dispatch(increment());
    };
    const onDecHandler = () => {
        dispatch(decrement());
    };
    const onSetCountHandler = () => {
        dispatch(setCounter(+input));
    };

    return (<div>
        Counter: {counter}
        <div>
            <button onClick={onIncHandler}>increment</button>
            <button onClick={onDecHandler}>decrement</button>
        </div>
        <div>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={onSetCountHandler}>set counter</button>
        </div>
    </div>)


}