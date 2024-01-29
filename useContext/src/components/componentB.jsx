import React from "react";
import ComponentC from "./componentC";

function ComponentB(props) {
  const { user } = props;

  return (
    <div className="box">
      ComponentB
      <ComponentC user={user} />
    </div>
  );
}

export default ComponentB;
