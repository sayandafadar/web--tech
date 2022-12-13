import { useEffect, useState } from "react";

function useCount(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return {
    count: count,
    increment: handleClick,
  };
}

export default useCount;
