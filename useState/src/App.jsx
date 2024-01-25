import React, { useState } from "react";
import Counter from "./components/counter";

function App() {
  // const [name, setName] = useState("guest");
  // const updateName = () => {
  //   setName("rishu");
  // };
  return (
    <>
      {/* <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div> */}
      <Counter />
    </>
  );
}

export default App;
