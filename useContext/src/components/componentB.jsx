import React from "react";
import ComponentC from "./componentC";

// function ComponentB(props) {
//   const { user } = props;

//   return (
//     <div className="box">
//       ComponentB
//       <ComponentC user={user} />
//     </div>
//   );
// }

function ComponentB() {
  return (
    <div className="box">
      ComponentB
      <ComponentC />
    </div>
  );
}

export default ComponentB;
