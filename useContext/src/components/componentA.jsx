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

// Step 1: Create a context
export const UserContext = createContext();

function ComponentA(props) {
  const [user, setUser] = useState("My Name is Rishu");

  return (
    <>
      <div className="box">
        ComponentA
        <div>Hello {user}</div>
        {/* Step 2: Use the Provider component to provide the context value */}
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;
