import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  });

  return (
    <>
      <h1>count is: {count}</h1>
    </>
  );
};

export default Count;
