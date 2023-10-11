import { useTypedSelector } from "@/GlobalRedux/store";
import { EventTypeModel } from "@/utils/typescriptModel";
import React, { useEffect } from "react";

const RegisterEventClick = () => {
  // const {data} = useTypedSelector((state)=> state.AllEvent)
  // let event

  // function handleClick(){

  //   data.filter((elem: EventTypeModel)=> {
  //     if(elem._id === "64d31c4045143146989") {
  //       event = elem
  //     }
  //   })
  // }
  //

  return (
    <div>
      <button className="text-xm">Register</button>
    </div>
  );
};

export default RegisterEventClick;
