import React from "react";

import { useContext } from "react";
import { UserContext } from "./componentA";

// function componentD(props) {
//   return (
//     <div className="box">
//       ComponentD
//       <div>Byee {props.user}</div>
//     </div>
//   );
// }
function ComponentD(props) {
  // Step 3: Consume the context using useContext hook
  const user = useContext(UserContext);

  return (
    <div className="box">
      ComponentD
      <div>Hello from ComponentA: {user}</div>
    </div>
  );
}

export default ComponentD;
