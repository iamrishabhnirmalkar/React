import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import { useEffect } from "react";
import { useState } from "react";

function hook() {
  const [name, setName] = useState("");
  const count = useRef(0);
  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });

  //=======By using useEffect we stulk in infinite loop so thats why we use useRef

  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setCount((pre) => pre + 1);
  //   });
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h2>Name : {name}</h2>
        <h2>Renders: {count.current}</h2>
        {/* <h2>Renders: {count}</h2> */}
      </div>
    </>
  );
}

export default hook;
