import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ marginRight: "500px" }}>Redux Project</span>
        <div>
          <Link
            className="navLink"
            style={{ marginRight: "50px", fontWeight: "bolder" }}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="navLink"
            style={{ marginRight: "50px", fontWeight: "bolder" }}
            to={"/cart"}
          >
            Cart
          </Link>
          <span style={{ marginRight: "50px", fontWeight: "bolder" }}>
            items:{items.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
