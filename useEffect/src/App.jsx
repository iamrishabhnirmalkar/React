import React, { useState } from "react";
import Counter from "./component/counter";

function App() {
  const [state, setState] = useState(true);

  return (
    <>
      <div>
        {state ? <Counter /> : ""}
        <div className="button">
          <button onClick={() => setState(!state)}>Toggle</button>
        </div>
      </div>
    </>
  );
}

export default App;
