import React from "react";
import ComponentD from "./componentD";

// function ComponentC(props) {
//   const { user } = props; // Destructure user from props

//   return (
//     <div className="box">
//       ComponentC
//       <ComponentD user={user} />
//     </div>
//   );
// }

function ComponentC() {
  return (
    <div className="box">
      ComponentC
      <ComponentD />
    </div>
  );
}

export default ComponentC;
