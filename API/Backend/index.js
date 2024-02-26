import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/api/product", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Blue T-shirt",
      price: 15.99,
      images:
        "https://images.pexels.com/photos/5222559/pexels-photo-5222559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Black Jeans",
      price: 29.99,
      images:
        "https://images.pexels.com/photos/5222559/pexels-photo-5222559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 49.99,
      images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"],
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 99.99,
      images: ["https://images.unsplash.com/photo-1505869568369-3b414f3eeafa"],
    },
    {
      id: 5,
      name: "Backpack",
      price: 39.99,
      images: ["https://images.unsplash.com/photo-1583497589104-64a9f5f0da1b"],
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 79.99,
      images: ["https://images.unsplash.com/photo-1585794895911-c4e37ca0d3b2"],
    },
    {
      id: 7,
      name: "Sunglasses",
      price: 24.99,
      images: ["https://images.unsplash.com/photo-1576613086050-5ccf0f7a20eb"],
    },
    {
      id: 8,
      name: "White Sneakers",
      price: 54.99,
      images: ["https://images.unsplash.com/photo-1598550873981-6c154f5bb2b5"],
    },
    {
      id: 9,
      name: "Denim Jacket",
      price: 69.99,
      images: ["https://images.unsplash.com/photo-1505691938895-175e1f3a02d8"],
    },
    {
      id: 10,
      name: "Dress",
      price: 34.99,
      images: ["https://images.unsplash.com/photo-1513192225491-f719e0c4aedd"],
    },
  ];
  // http://localhost:3000/api/product?search=metal

  if (req.query.search) {
    const fliterproduct = products.filter((products) =>
      products.name.includes(req.query.search)
    );
    res.send(fliterproduct);
    return; //Important otherwise crash the server
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server Runnig on port ${port}`);
});
