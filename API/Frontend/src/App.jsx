import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const { products, error, loading } = customQuery("/api/product");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/product?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          log("Request Canceled", error.message);
        }
        setError(true);
        setLoading(false);
      }
    };

    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <div>
        <h1>API HANDLE</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="searchh"
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && <h1>Loading............</h1>}
        {error && <h1>something error............</h1>}
        <h2>Number of products: {products.length}</h2>
      </div>
    </>
  );
}

export default App;

// const customQuery = (urlPath) => {
//   const [products, setProducts] = React.useState([]);
//   const [error, setError] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [urlPath]);

//   return {
//     products,
//     error,
//     loading,
//   };
// };
