import React, { useState, useEffect } from "react";

function counter() {
  const [count, setCount] = useState(0);

  //This is run when component mount
  useEffect(() => {
    console.log("counter Mounted");

    return function () {
      console.log("Unmounted the counter");
    };
  }, []);

  //Empty dep arrays means => whole Components
  //id dep has any value => return vale

  useEffect(() => {
    console.log("update the conut");

    return () => {
      console.log("Counter UseEffect Return");
    };
  }, [count]);

  const sub = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="box">
        <div className="button">
          <button onClick={sub}>Sub</button>
        </div>
        <div className="count">Counter:{count}</div>
        <div className="button">
          <button onClick={add}>Add</button>
        </div>
      </div>
    </>
  );
}

export default counter;
