{
  /* ===================================Without UseContex================================================== */
}
// import React, {  useState } from "react";
// import ComponentB from "./componentB";

// function componentA(props) {
//   const [user, setUser] = useState("Rishu");

//   return (
//     <>
//       <div className="box">
//         ComponentA
//         <div>Hello {user}</div>
//         <ComponentB user={user} />
//       </div>

//     </>
//   );
// }
// export default componentA;

{
  /* =======================================With UseContex============================================== */
}

import React, { createContext, useContext, useState } from "react";
import ComponentB from "./componentB";

export const userContext = createContext();

function componentA(props) {
  const [user, setUser] = useState("Rishu");

  return (
    <>
      <div className="box">
        ComponentA
        <div>Hello {user}</div>
        <useContext.Provider value={user}>
          <ComponentB user={user} />
        </useContext.Provider>
      </div>
    </>
  );
}

export default componentA;
