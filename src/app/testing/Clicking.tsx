"use client";
import React, { useCallback, useState } from "react";
import List from "./List";

const Clicking = () => {
  const [color, setcolor] = useState<any>();
  const [dark, setdark] = useState(false);

  //   function getColor() {
  //     return color;
  //   }
  const getColor = useCallback(() => {
    return color;
  }, [color]);
  function randomColor() {
    setcolor(Math.floor(Math.random() * 255));
    console.log(color);
  }

  return (
    <div>
      <div></div>
      <button onClick={randomColor}>Ge color</button>
      <List getColor={getColor} />

      <div>
        <button
          onClick={() => {
            setdark(!dark);
            console.log(color);
          }}
        >
          Playing
        </button>
      </div>
    </div>
  );
};

export default Clicking;
