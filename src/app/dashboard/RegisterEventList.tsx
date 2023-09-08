"use client";
import { useTypedSelector } from "@/GlobalRedux/store";
import React from "react";

const RegisterEventList = () => {
  const RegisterEvent = useTypedSelector(
    (state) => state.RegisterEventData.data
  );
  console.log(RegisterEvent);

  return <div>RegisterEventList</div>;
};

export default RegisterEventList;
