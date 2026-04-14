import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-3">Product Explorer</h2>

      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />

      {loading && <h3>Loading...</h3>}

      {error && <Error message={error} />}

      {!loading && !error && filteredProducts.length === 0 && (
        <h4 className="text-center mt-4">No products found</h4>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;