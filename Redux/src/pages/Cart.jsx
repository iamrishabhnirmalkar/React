import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/Cartslice";

function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="cardWrapper">
        <h1>CartPage</h1>
        {cartitems.map((items) => (
          <div className="cartCard" key={items.id}>
            <img src={items.image} alt="img" />
            <h4>{items.title}</h4>
            <h4>{items.price}</h4>
            <button className="btn" onClick={() => handleremove(items.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
