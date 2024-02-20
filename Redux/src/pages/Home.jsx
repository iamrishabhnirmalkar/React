import React, { useState, useEffect } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";

function Home() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const handleadd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="productsWrapper">
        {product.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button className="btn" onClick={() => handleadd(product)}>
              Add to card
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
