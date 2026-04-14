import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Server error");
        }

        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-3">Product Explorer</h2>

      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      {loading && <h3 className="text-center mt-4">Loading...</h3>}

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