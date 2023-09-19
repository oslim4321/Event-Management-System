import React, { useEffect } from "react";

const List = ({ getColor }: any) => {
  useEffect(() => {
    console.log("updating component unknown");
  }, [getColor]);
  return (
    <div>
      List
      <button>Click again</button>
    </div>
  );
};

export default List;
