"use client";
import React from "react";

import { useTypedSelector } from "@/GlobalRedux/store";
import { useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByAmount,
} from "@/GlobalRedux/Features/CounterSlice/counterSlice";

const TestReduc = () => {
  const count = useTypedSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      TestReduc
      <h1>Number{count}</h1>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
    </div>
  );
};

export default TestReduc;
