import React, { useEffect } from "react";

const List = ({ getColor }: any) => {
  useEffect(() => {}, [getColor]);
  return (
    <div>
      List
      <button>Click again</button>
    </div>
  );
};

export default List;
