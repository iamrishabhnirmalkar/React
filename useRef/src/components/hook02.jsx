import React from "react";
import { useRef } from "react";

function hook02() {
  const inputele = useRef();
  const handleclick = () => {
    console.log(inputele.current);
    inputele.current.style.width = "300px";
    // inputele.current.focus();
  };
  return (
    <>
      <div>
        <input type="text" ref={inputele} />
        <button onClick={handleclick}>Click here</button>
      </div>
    </>
  );
}

export default hook02;
